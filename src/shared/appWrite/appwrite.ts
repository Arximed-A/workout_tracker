import {Client, Databases, Account} from "appwrite";

const client = new Client()
	.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account: Account = new Account(client);
export const databases: Databases = new Databases(client); 