import {RoutePath} from "@/shared/model/router/routerPaths.ts";

export const menuItems: noName[] = [{
  id: 1,
  text: "спортивное питание",
  icon: '',
  link: RoutePath.login,
  children: [{
    id: 1,
    text: "креатин"
  }]
},
  {
    id: 2,
    link: RoutePath.login,
    text: "аналитика",
    icon: '',
  }]

interface noName {
  id: number,
  text: string,
  link: typeof RoutePath[keyof typeof RoutePath],
  icon: string,
  children?: {
    id: number,
    text: string
  }[]
}