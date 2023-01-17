import {Outlet} from 'react-router-dom'

export default function About(){
    return (
        <div>
            <p>Its about page</p>
            <a href="/about/usukhuu">Usukhuu</a>
            <a href="/about/khangai">Khangai</a>
            <Outlet/>
        </div>
    )
}