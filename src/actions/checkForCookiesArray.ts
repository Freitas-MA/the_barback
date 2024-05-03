export 	const checkForCookiesAsArray = async (cookieName: string) => {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(cookieName))
        ?.split("=")[1];
    const cookieRes = cookie ? JSON.parse(cookie) : [];
    return cookieRes;
};