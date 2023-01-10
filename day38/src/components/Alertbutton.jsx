export default function AlertButton ({messege, children}) {
    return <button onClick={()=> alert(messege)}> {children}</button>
    
}