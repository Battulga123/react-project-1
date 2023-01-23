import { useEffect } from "react"
import { useState } from "react"

export  default function Button () {
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect (() => {
        if(isPlaying) {
            console.log('It is playing')
        } else {
            console.log('Its not playing')
        }
    }, [isPlaying])
    function handleClick() {
        console.log('you clicked me')
        setIsPlaying(!isPlaying)
    }
    return (
     <button onClick={handleClick}> click me</button>   
        

    )
}