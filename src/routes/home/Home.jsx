import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import sidebarLogo from '../../assets/menu.png'
import './home.css'


export default function Home(){
    const [ channel, setChannel ] = useState(['all'])
    const [ close, setClose ] = useState(false)
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
        let children = event.target.parentNode.children;
        for(let i = 0; i < children.length; i++){
            newArray.push(children[i].id)
        }     
        event.target.classList.toggle('active')
        setChannel(newArray)
    }

    function handleHomeClick(){
        nav('/stream');
        removeActive();
        setChannel(['all'])
    }

    function handleAboutClick(){
        nav('/about')
    }
    function handleStatusClick(status){
        nav('/stream');
        removeActive();
        let newArray = ['all', status];
        setChannel(newArray);
    }

    function removeActive(){
        const active = document.querySelector('.active')
        if(active){active.classList.toggle('active')}
    }

    function toggleSidebar(){
        setClose(close?false:true)
    }

    return(
        <div className={close?'body closeSidebar':'body'}>
            <div className="header">
                <div className="headerLeft">
                    <div className="opensidebarTab" onClick={toggleSidebar}><img className='sidebarLogo' src={sidebarLogo} /></div>
                    <div className='header-text' onClick={handleHomeClick}>HoloStream</div>
                </div>
                <div className='header-tab'>
                    <div className='tab' onClick={handleHomeClick}>Home</div>
                    <div className='tab' onClick={() => {handleStatusClick('live')}}>Live</div>
                    <div className='tab' onClick={() => {handleStatusClick('upcoming')}}>Upcoming</div>
                    <div className='tab' onClick={handleAboutClick}>About</div>
                </div>
            </div>
            <div className="sidebar">
                <div className='group'  ><h2 className='group-name' onClick={handleGroupClick}>{close?'JP':'Hololive JP'}</h2>
                    <div className={close?'gen hidden':'gen'} id='0v0th Generation' onClick={handleClick}>Gen 0</div>
                    <div className={close?'gen hidden':'gen'} id='c 1st Generation' onClick={handleClick}>Gen 1</div>
                    <div className={close?'gen hidden':'gen'} id='d 2nd Generation' onClick={handleClick}>Gen 2</div>
                    <div className={close?'gen hidden':'gen'} id='d_GAMERS' onClick={handleClick}>Gamers</div>
                    <div className={close?'gen hidden':'gen'} id='ea3rd Generation (Fantasy)' onClick={handleClick}>Gen 3</div>
                    <div className={close?'gen hidden':'gen'} id='fa4th Generation (holoForce)' onClick={handleClick}>Gen 4</div>
                    <div className={close?'gen hidden':'gen'} id='ga5th Generation (holoFive)' onClick={handleClick}>Gen 5</div>
                    <div className={close?'gen hidden':'gen'} id='gm6th Generation -holoX-' onClick={handleClick}>HoloX</div>
                    <div className={close?'gen hidden':'gen'} id='taDEV_IS ReGLOSS' onClick={handleClick}>ReGLOSS</div>
                </div>
                <div className='group'  ><h2 className='group-name' onClick={handleGroupClick}>{close?'EN':'Hololive EN'}</h2>
                    <div className={close?'gen hidden':'gen'} id='h English -Myth-' onClick={handleClick}>Myth</div>
                    <div className={close?'gen hidden':'gen'} id='ibEnglish -Promise-' onClick={handleClick}>Promise</div>
                    <div className={close?'gen hidden':'gen'} id='ihEnglish -Advent-' onClick={handleClick}>Advent</div>
                </div>
                <div className='group'  ><h2 className='group-name' onClick={handleGroupClick}>{close?'ID':'Hololive ID'}</h2>
                    <div className={close?'gen hidden':'gen'} id='kaIndonesia 1st Gen (AREA 15)' onClick={handleClick}>Gen 1</div>
                    <div className={close?'gen hidden':'gen'} id='kcIndonesia 2nd Gen (holoro)' onClick={handleClick}>Gen 2</div>
                    <div className={close?'gen hidden':'gen'} id='keIndonesia 3rd Gen (holoh3ro)' onClick={handleClick}>Gen 3</div>
                </div>
                <div className='group'  ><h2 className='group-name' onClick={handleGroupClick}>{close?'ST':'Hololive Star'}</h2>
                    <div className={close?'gen hidden':'gen'} id='maHOLOSTARS 1st Gen' onClick={handleClick}>Holostar Gen 1</div>
                    <div className={close?'gen hidden':'gen'} id='mcHOLOSTARS 2nd Gen (SunTempo)' onClick={handleClick}>Holostar Gen 2</div>
                    <div className={close?'gen hidden':'gen'} id='meHOLOSTARS 3rd Gen (TriNero)' onClick={handleClick}>Holostar Gen 3</div>
                    <div className={close?'gen hidden':'gen'} id='oeHOLOSTARS English -ARMIS-' onClick={handleClick}>Holostar Armis</div>
                    <div className={close?'gen hidden':'gen'} id='ocHOLOSTARS English -TEMPUS- Vanguard' onClick={handleClick}>Holostar Tempus</div>
                    <div className={close?'gen hidden':'gen'} id='naHOLOSTARS UPROAR!!' onClick={handleClick}>Holostar Uproar</div>
                </div>

            </div>

                <Outlet context={channel}/> 
        </div>
    )
}