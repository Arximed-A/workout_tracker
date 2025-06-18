import {account} from "@/shared/appWrite/appwrite.ts";

export async function fetchUpdateVerification(userId: string, secret: string): Promise<void> {
  const res = await account.updateVerification(userId, secret);
  console.log('updateVerification', res)
}