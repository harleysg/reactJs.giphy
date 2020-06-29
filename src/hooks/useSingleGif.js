import { useState, useEffect } from "react";

import useGifs from "./useGifs";
import { getSingleGifById } from "service/index.js";

export function useSingleGif ({ id }) {
    const { gifs } = useGifs();
    const gifFromCache = gifs.find((gif) => gif.id === id);
    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [gif, setGif] = useState(gifFromCache);
    
    useEffect(function() {
        if(!gif) {
            setIsLoading(true)
            getSingleGifById({id}).then(data => {
                setGif(data)
                setIsLoading(false)
                setIsError(false)
            }).catch(() => {
                setIsLoading(false)
                setIsError(true)
            })
        }
    }, [gif, id, gifs])

    return { gif, isLoading, isError };
}

