import { useParams } from "react-router-dom";
import YouTube from 'react-youtube'


export default function Stream(){
    const param = useParams();
    const opts = {
        height: '600',
        width: '1100',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },}
    
    return(
        <>
            <YouTube videoId={param.id} opts={opts}/>
        </>
    )
}