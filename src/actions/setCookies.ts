"use server"
import type { SetCookieProps } from "#/types";
export const setCookieFavorite = async ({name, value}: SetCookieProps) => {
    const response = await fetch("/api/setCookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: name, value: value}),
    });

    if (!response.ok) {
        console.error("Failed to set cookie");
    }
};
