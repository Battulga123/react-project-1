import AlertButton from "./Alertbutton";

export default function Toolbar (){
    return (
        <div>
            <AlertButton messege="Playing!">Play Movie</AlertButton>
            <AlertButton messege="Uploading!"> Upload image</AlertButton>
        </div>
    )
}