import {Link,useLocation} from 'react-router-dom'

export default function AboutPage () {
    const location = useLocation ()
    const state = location.state
    console.log(state)

    return (



        <div>
            <h1>Its About Page</h1>


            <Link to={'/'}>Back</Link>
        </div>
    )
}