import {defineStore} from "pinia";
import {type Ref, ref} from "vue";

export const useUserStore = defineStore('user', () => {
  const user: Ref<IUser | undefined> = ref()
  const language: Ref<'ru' | 'en'> = ref('ru')
  return {user, language}
})

interface IUser {
  id: string, // check
  email: string,
  avatar: string | null,
  language: 'en' | 'ru',
  first_name: string,
  second_name: string,
  weight: number,
  height: number,
  birthday: string,
}