import { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import './home.css'


export default function Home(){
    const [ channel, setChannel ] = useState(['all'])
    const nav = useNavigate();

    function handleClick(event){
        event.stopPropagation()
        nav('/stream');
        removeActive();
        let newArray = [event.target.id];
        event.target.classList.toggle('active')
        setChannel(newArray)
    }

    function handleGroupClick(event){
        nav('/stream');
        removeActive()
        let newArray = [];
        let children = event.target.children;
        for(let i = 0; i < children.length; i++){
            newArray.push(children[i].id)
        }     
        setChannel(newArray)
    }

    function handleHomeClick(){
        nav('/stream');
        removeActive();
        setChannel(['all'])
    }

    function removeActive(){
        const active = document.querySelector('.active')
        if(active){active.classList.toggle('active')}
    }

    return(
        <div className='body'>
            <div className="header">
                <div onClick={handleHomeClick}><h1>HoloStream</h1></div>
            </div>
            <div className="sidebar">
                
                <div className='group' onClick={handleGroupClick} >Hololive JP
                    <div className='gen' to={'/stream'} id='gm6th Generation -holoX-' onClick={handleClick}>test</div>
                    <div className='gen' id='0v0th Generation' onClick={handleClick}>Gen 0</div>
                    <div className='gen' id='gm6th Generation -holoX-' onClick={handleClick}>test</div>
                    <div className='gen' id='d_GAMERS' onClick={handleClick}>Gamers</div>
                    <div className='gen' id='ea3rd Generation (Fantasy)' onClick={handleClick}>Gen 3</div>
                    <div className='gen' id='fa4th Generation (holoForce)' onClick={handleClick}>Gen 4</div>
                    <div className='gen' id='ga5th Generation (holoFive)' onClick={handleClick}>Gen 5</div>
                    <div className='gen' id='gm6th Generation -holoX-' onClick={handleClick}>HoloX</div>
                    <div className='gen' id='taDEV_IS ReGLOSS' onClick={handleClick}>ReGLOSS</div>
                </div>
                <div className='group' onClick={handleGroupClick}>Hololive EN
                    <div className='gen' id='gm6th Generation -holoX-' onClick={handleClick}>test</div>
                    <div className='gen' id='gm6th Generation -holoX-' onClick={handleClick}>test</div>
                    <div className='gen' id='ihEnglish -Advent-' onClick={handleClick}>Advent</div>
                </div>
                <div className='group' onClick={handleGroupClick}>Hololive ID
                    <div className='gen' id='kaIndonesia 1st Gen (AREA 15)' onClick={handleClick}>Gen 1</div>
                    <div className='gen' id='gm6th Generation -holoX-' onClick={handleClick}>test</div>
                    <div className='gen' id='keIndonesia 3rd Gen (holoh3ro)' onClick={handleClick}>Gen 3</div>
                </div>
                <div className='group' onClick={handleGroupClick}>Hololive Star
                    <div className='gen' id='maHOLOSTARS 1st Gen' onClick={handleClick}>Holostar Gen 1</div>
                    <div className='gen' id='mcHOLOSTARS 2nd Gen (SunTempo)' onClick={handleClick}>Holostar Gen 2</div>
                    <div className='gen' id='oeHOLOSTARS English -ARMIS-' onClick={handleClick}>Holostar EN</div>
                    <div className='gen' id='naHOLOSTARS UPROAR!!' onClick={handleClick}>Holostar Uproar</div>
                </div>

            </div>

            <div className="content">
                <Outlet context={channel}/>
            </div>
        </div>
    )
}