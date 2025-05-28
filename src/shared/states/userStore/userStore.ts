import type { IUserStoreState } from "./types/typesUserStore"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", {
	state: (): IUserStoreState => ({
		avatar: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png",
	}),
	actions: {},
})
