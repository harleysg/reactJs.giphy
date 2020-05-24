import {useContext} from "react"
import GifsCtx from "context/gifs.context";

export function useGlobalGifs () {
    const { gifs, keyWord } = useContext(GifsCtx)
    return {gifs, keyWord};
}