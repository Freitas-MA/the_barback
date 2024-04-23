const addSearchTerm = (cookieName: string, name: string[], value: string, daysToExpire: number) => {
    const newCookie = [...name, value];
    const date = new Date();
    date.setDate(date.getDate() + daysToExpire);
    document.cookie = `${cookieName}=${JSON.stringify(
        newCookie,
    )}; expires=${date.toUTCString()}`;
};