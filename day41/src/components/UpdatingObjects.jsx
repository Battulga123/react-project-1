import { useState } from "react"

export default function UpdatingObjects() {
    const [user, setUser] = useState({ age: 18, name: 'Dorj' })
    const check = () => {
        // user.age += 20
        setUser({ age: user.age + 20, name: 'Dorj' })
    }

    return (
        <div>
            Updating objects
            <button onClick={check}>
                User age is {user.age}
            </button>
        </div>

    )

}