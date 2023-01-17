
import {Link} from 'react-router-dom'

export default function (){
    
    const aboutPageData ={
        from: 'Index',
        messege: 'Welcom to About Page',
        timestamp: Date.now()
    }

    const homePageData ={
        from: 'Index',
        messege: 'Welcom to Home Page',
        timestamp: Date.now()
    }


    return (
        <div>
            <h1>Day44 - Dynamic Routing</h1>
            <nav>
            <Link to={'about'} state={aboutPageData}>About Page</Link>
            <Link to={'home'} state={homePageData}>Home Page</Link>
            <Link to={'accordian'}>Accordian Page</Link>
            <Link to={'movies'}>Movies Pages</Link>
            <Link to={'gallery'}>Image Gallery Page</Link>
            <Link to={'toaster'}>ToasterPage</Link>
            </nav>
        </div>
    )
}