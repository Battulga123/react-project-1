import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div>
            <h1>Its home page</h1>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/accordian'>Accordian</Link>
            </nav>
        </div>
    )
}