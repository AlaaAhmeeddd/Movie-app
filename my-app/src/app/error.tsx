"use client";

import { useEffect } from "react";

type ErrorProps = {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h1>Something went wrong. Please try again later.</h1>
            <button className="hover:text-amber-500" onClick={reset}>Try Again</button>
        </div>
    );
}
