import { useParams } from "react-router-dom";
import YouTube from 'react-youtube'

export default function Stream(){
    const id = useParams();
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },}
    
    return(
        <>
            <YouTube videoId={id} opts={opts}/>
        </>
    )
}