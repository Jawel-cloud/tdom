import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import pages from "./index"
import e1 from '../Assets/house/e1.png';
import e2 from '../Assets/house/e2.png';
import e3 from '../Assets/house/e3.png';
import e4 from '../Assets/house/e4.png';
import e5 from '../Assets/house/e5.png';
import e6 from '../Assets/house/e6.png';
import e7 from '../Assets/house/e7.png';
import e8 from '../Assets/house/e8.png';
import e9 from '../Assets/house/e9.png';
import e10 from '../Assets/house/e10.png';
import e11 from '../Assets/house/e11.png';
import e12 from '../Assets/house/e12.png';
import e13 from '../Assets/house/e13.png';
import e14 from '../Assets/house/e14.png';
const Homepage = () => {
    const {AboutUs, Career, Contact, Offer, OurWorks} = pages;

const handleClick=()=>{
    console.log('click')
}

    //house elements
    const houseElements = [
        {name: 'e1', delay:1, pict: e1},
        {name: 'e2', delay:2, pict: e2},
        {name: 'e3', delay:3, pict: e3},
        {name: 'e4', delay:4, pict: e4},
        {name: 'e5', delay:5, pict: e5},
        {name: 'e6', delay:6, pict: e6},
        {name: 'e7', delay:7, pict: e7},
        {name: 'e8', delay:8, pict: e8},
        {name: 'e9', delay:9, pict: e9},
        {name: 'e10', delay:10, pict: e10},
        {name: 'e11', delay:11, pict: e11},
        {name: 'e12', delay:12, pict: e12},
        {name: 'e13', delay:13, pict: e13},
        {name: 'e14', delay:14, pict: e14},
    ]

    const houseComponents = houseElements.map(e=><div className='houseBuild'
    style={{animationDelay:`${e.delay*0.5}s`}}
     key={e.name}><div className={`houseElement ${e.name}`} style={{backgroundImage:`url(${e.pict})`}}></div></div>)

    const RouteButtons = () => {
        return (
            <div className='Menu_Wrapper'>
                <NavLink to='/aboutUs'><button className='menuButton' name='aboutUs' onClick={handleClick} >O Nas</button></NavLink>
                <NavLink to='/offer'><button className='menuButton' name='offer' onClick={handleClick} >Oferta</button></NavLink>
                <NavLink to='/ourWorks'><button className='menuButton' name='ourWorks' onClick={handleClick} >Nasze realizacje</button></NavLink>
                <NavLink to='/career'><button className='menuButton' name='career' onClick={handleClick} >Kariera</button></NavLink>
                <NavLink to='/contact'><button className='menuButton' name='contact' onClick={handleClick} >Kontakt</button></NavLink>
            </div>
        );
    };

    return (
        <>
        <div className='siteWrapper'>
            <h1>TDom</h1>
            <Router>
                <RouteButtons/>
                <div>
                    <Routes>
                        <Route path='/aboutUs' element={<AboutUs/>} />
                        <Route path='/offer' element={<Offer/>} />
                        <Route path='/ourWorks' element={<OurWorks/>} />
                        <Route path='/career' element={<Career/>} />
                        <Route path='/contact' element={<Contact/>} />
                    </Routes>
                    <div className='house'>{houseComponents}</div>
                </div>
            </Router>
        </div>
        </>
    );
}
 
export default Homepage;