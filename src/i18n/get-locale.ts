import { cookies } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "./config";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get("locale")?.value;

  if (value && isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
