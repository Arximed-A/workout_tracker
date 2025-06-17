# Используем официальный образ Node.js 22 на Alpine (легковесный)
FROM node:22-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости (включая devDependencies для сборки)
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# ======================================
# Финальный образ (на основе nginx для раздачи статики)
FROM nginx:alpine

# Копируем собранные файлы из builder-этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (если нужен кастомный)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]