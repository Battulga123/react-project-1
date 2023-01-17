import { useState } from "react"


export default function Panel ({children, title}) {


    const [isActive, SetIsactive] = useState(false)

    return (

        <div>
        <h3>{title}</h3>
        {
            isActive ? <p>{children}</p> 
            : <button onClick={() => SetIsactive(true)}>Show</button> 
        }
        </div>
    )
}