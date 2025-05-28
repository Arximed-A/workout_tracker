# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# 1. Включите corepack и установите pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 2. Копируем ТОЛЬКО файлы зависимостей сначала
COPY package.json pnpm-lock.yaml* .npmrc* ./

# 3. Устанавливаем зависимости (с кешированием)
RUN pnpm fetch && pnpm install -r --offline --frozen-lockfile

# 4. Копируем остальные файлы
COPY . .

# 5. Сборка проекта
RUN pnpm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Копируем только .output и node_modules
COPY --from=builder /app/.output ./.
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=80
ENV HOST=0.0.0.0
EXPOSE 80

CMD ["node", "/app/server/index.mjs"]