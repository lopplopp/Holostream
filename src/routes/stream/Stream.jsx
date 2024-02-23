import { useParams } from "react-router-dom";
import YouTube from 'react-youtube'
import './stream.css'


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
        <div className="content">
            <YouTube className="video" videoId={param.id} opts={opts}/>
        </div>
    )
}