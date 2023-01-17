import { useParams, useLocation} from 'react-router-dom'



export default function Movie(){

    const {id} = useParams()
    const location = useLocation()
    console.log(location.state)


    return (
     <div>
        <h1>Movie Detail page {id}</h1>
        <div>{location.state.id}</div>
        <div>{location.state.name}</div>
        <div>{location.state.ISBN}</div>
        <div>{location.state.genre}</div>
     </div>
    )
}