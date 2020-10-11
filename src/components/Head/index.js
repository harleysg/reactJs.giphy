import React from "react";
import { HeadProvider } from "react-head";

export function Head ({children}) {
    return <HeadProvider>
        {children}
    </HeadProvider>
}