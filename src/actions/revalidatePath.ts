"use server";
import { revalidatePath } from "next/cache";

export default async function revalidateRoute(originalPath: string, type?: "layout" | "page") {
  revalidatePath(originalPath, type);
}