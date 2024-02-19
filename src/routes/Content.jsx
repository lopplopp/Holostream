import { useState } from "react";
import { useEffect,  } from "react";
import { useOutletContext, Link } from "react-router-dom";


export default function Content(){
    const [stream, setStream] = useState([]);
    const channel = useOutletContext()

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
        
        fetchData()
    }, [])

    function filter(list){

        const newList = channel.includes('all')
            ?list.filter((data) => {return data.channel.org === 'Hololive'})
            :list.filter((data) => {return data.channel.org === 'Hololive' && channel.includes(data.channel.suborg)})

        console.log(newList)
        return newList
    }



    return(
        <>
        {!stream.length?"loading..."
        :stream.map((data) => {
            return(
                <div key={data.id}>
                    <Link to={`stream/${data.id}`}>
                        <img src={`https://img.youtube.com/vi/${data.id}/0.jpg`} className="thumbnail"/>
                        <span>{data.status}</span>
                    </Link>
                </div>
            )
        })}
        </>
    )
}