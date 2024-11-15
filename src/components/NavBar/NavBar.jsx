import   {useState }from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import plane from '../../../public/image/plane.webp'
import logo from '../../../public/image/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faMagnifyingGlass ,faArrowRightLong,faCartShopping,faBars} from '@fortawesome/free-solid-svg-icons';

export const NavBar = ({myclass }) => {
  const [isOpen , setIsOpen] = useState(false)
  const handleopen = () => {
    setIsOpen(!isOpen)
  } 
  return (
    <div className={` ${myclass ? 'nav' : 'nav2'}`}>
        <div className='startNav'>
            {
                !myclass &&(
                <img className='imgNav' src={plane} alt="plane" /> 
            )}
            <img className='logoNav' src={logo} alt="logo" />
        </div>
        {   
            myclass&&(
            <div>
            <ul className={`ulNav ${isOpen ? "open" : ""}`}>
                <li>
                    <Link className='linkNav' to="/">Home <FontAwesomeIcon icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link className='linkNav'to="/about">About</Link>
                </li>
                <li>
                    <Link className='linkNav'>Services <FontAwesomeIcon icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link className='linkNav'>Pages <FontAwesomeIcon icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link className='linkNav'>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                </li>
                <li>
                    <Link className='linkNav'to="/contact">Contact <FontAwesomeIcon icon={faChevronDown} /></Link>
                </li>
            </ul>
        </div>
        )}
        <div className='endNav'>
            {   
            !myclass&&(
                <div>
                    <ul className={`ulNav ${isOpen ? "open" : ""}`}>
                        <li>
                            <Link className='linkNav' to="/">Home <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </li>
                        <li>
                            <Link className='linkNav'to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='linkNav'>Services <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </li>
                        <li>
                            <Link className='linkNav'>Pages <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </li>
                        <li>
                            <Link className='linkNav'>Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </li>
                        <li>
                            <Link className='linkNav'to="/contact">Contact <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </li>
                    </ul>
                </div>
            )}            
            <button className={`searchNav ${myclass ? "searchNav" : "searchNav2"}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            {
                myclass&&(
                
                <button className='shopNav'><FontAwesomeIcon icon={faCartShopping}/></button>
            )}
            <button onClick={handleopen} className={`barNav ${myclass ? "barNav" : "barNav2"}`}><FontAwesomeIcon icon={faBars} /></button>
            {
                myclass&&(
                    <button className='getNav'>Get A Quote <FontAwesomeIcon className='arrowRight' icon={faArrowRightLong} /></button>
                )}
            {
                !myclass&&(
                    <>
                        <div className='triangle'></div>
                        <div className='afterTriangle'>
                            <button className='getNav2'>Get A Quote <FontAwesomeIcon className='arrowRight' icon={faArrowRightLong} /></button>
                        </div>
                    </>
            )}
        </div>
    </div>
)}