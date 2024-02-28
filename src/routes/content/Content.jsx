import { useState } from "react";
import { useEffect,  } from "react";
import { useOutletContext, Link } from "react-router-dom";
import './content.css'


export default function Content(){
    const [stream, setStream] = useState([]);
    let channel = useOutletContext()

    useEffect(() => {
        async function fetchData(){
            await fetch("https://holodex.net/api/v2/live", {
            method: 'GET',
            headers: {
                'X-APIKEY': '03d490c5-d97d-4c76-a5e4-095fdfc682bc'
            }
        })
        .then(res => res.json())
        .then(data => {setStream(filter(data))})
        }

        function filter(list){

            let newList = channel.includes('all')
            ?list.filter((data) => {return data.channel.org === 'Hololive'})
            :list.filter((data) => {return data.channel.org === 'Hololive' && channel.includes(data.channel.suborg)})

            if(channel.includes('live')){
                let updateList = newList.filter((data) => {return data.status === 'live'})
                return updateList
            }else if(channel.includes('upcoming')){
                let updateList = newList.filter((data) => {return data.status === 'upcoming'})
                return updateList
            }
           
            return newList
        }
        
        fetchData()
    }, [channel])


    return(
        <div className={stream.length?"content":"content no-stream"}>
        {!stream.length?<h2 className="no-stream-text">There are currently no stream</h2>
        :stream.map((data) => {
            return(
                    <div key={data.id} className="thumbnail">
                        <div className="thumbnaill-container">
                            <Link to={`/stream/${data.id}`}>
                                <img src={`https://img.youtube.com/vi/${data.id}/0.jpg`} className="thumbnailImage"/>
                            </Link>
                            <span className="status">{data.status}</span>
                        </div>
                        <div className="ch-info">
                            <div>
                                <img src={data.channel.photo} className="ch-image" />
                            </div>

                            <div>
                                <span className="title">{data.title}</span>
                                <span className="ch-name">{data.channel.name}</span>
                            </div>

                        </div>
                    </div>
            )
        })}
        </div>
    )
}