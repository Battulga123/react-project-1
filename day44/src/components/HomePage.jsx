import {Link, useLocation} from 'react-router-dom'


export default function HomePage() {

    const location = useLocation ()
    const state = location.state
    console.log(state)
    return (
        <div>
            <h1>Its Home Page</h1>

            <Link to={'/'}>Back</Link>

        </div>
    )
}