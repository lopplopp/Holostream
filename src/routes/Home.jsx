import { useState } from 'react'
import Content from './Content'
import { Outlet } from 'react-router-dom'


export default function Home(){
    const [ channel, setChannel ] = useState(['all'])


    return(
        <div>
            <div className="header">
                <h1>HoloStream</h1>
            </div>
            <div className="sidbar">
                <p>Hololive JP</p>
                <p>Hololive EN</p>
                <p>Hololive ID</p>
            </div>
            <div className="content">
                <Outlet context={channel}/>
            </div>
        </div>
    )
}