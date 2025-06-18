import {account} from "@/shared/appWrite/appwrite.ts";


export async function fetchSignUp(id: string, email: string, password: string): Promise<void> {

  await account.create(id, email, password);
  await account.createEmailPasswordSession(email, password);

}

export async function fetchVerifyEmail(): Promise<void> {
  await account.createVerification(import.meta.env.VITE_SERVER_ADDRESS + '/verify');
}


