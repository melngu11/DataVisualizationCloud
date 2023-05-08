
import { Button } from './Button';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
        setButton(false);
        } else 
            {setButton(true);
            }
    };

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);



    return (
    
        <>
        <nav className="navbar">
            <div className = "navbar-container">
                <Link to = "/" className = "navbar-logo" onClick={closeMobileMenu}>
                    <i className = "fa-solid fa-shield-cat" />
                </Link>
                <div className = "menu-icon" onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/homicide' className = 'nav-links' onClick={closeMobileMenu}>
                            Homicides
                            </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/school' className = 'nav-links' onClick={closeMobileMenu}>
                            Schoot Shootings
                            </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to = '/provision' className = 'nav-links' onClick={closeMobileMenu}>
                            Gun Provisions
                            </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT SENATOR</Button>}
     
            </div>
        </nav>
        
        </>
  );
}

export default Navbar