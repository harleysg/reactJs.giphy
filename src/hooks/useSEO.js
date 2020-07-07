import { useEffect, useContext, useRef } from "react";
import Context from "context/app.context";

export default function useSEO ({title}) {

    const prevTitle = useRef(document.title).current;
    const { name } = useContext(Context);

    useEffect(() => {
        document.title = `${decodeURI(title)} | ${name}`;
        return () => document.title = prevTitle
    }, [title, name, prevTitle])
}