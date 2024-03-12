"use client"
import React, { useState, useEffect } from 'react';

interface CookiesNoticeProps {
    className: string;
}

const CookiesNotice: React.FC<CookiesNoticeProps> = ({ className }) => {
    const [acceptedCookies, setAcceptedCookies] = useState<boolean>(true);

    useEffect(() => {
        const cookiesAccepted = document.cookie.includes('cookiesAccepted=true');
        if (!cookiesAccepted) {
            setAcceptedCookies(false);
        }
    }, []);

    const handleAcceptCookies = () => {
        document.cookie = 'cookiesAccepted=true';
        setAcceptedCookies(true);
    };

    return (
        <>
            {!acceptedCookies && (
                <div className={className}>
                    This website uses cookies for a better user experience. By continuing to use this site, you accept the use of cookies.
                    <button className='bg-red-500 rounded-xl w-[25%] self-center mt-2' onClick={handleAcceptCookies}>Ok!</button>
                </div>
            )}
        </>
    );
};

export default CookiesNotice;
