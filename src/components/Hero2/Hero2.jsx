// import React from 'react'
import './Hero2.css'
import hero2 from '../../../public/image/hero2.webp'
import recHero2 from '../../../public/image/recHero2.webp'
import lineHero2 from '../../../public/image/lineHero2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

const Hero2 = ({tittle , subTittle}) => {
  return (
    <>
        <div className='Hero2'>
            <div className='colorHero2'></div>
            <img className='imgHero2' src={hero2} alt="imgHero2" />
            <img className='recHero2' src={recHero2} alt="recHero2" />
            <img className='lineHero2' src={lineHero2} alt="lineHero2" />
            <div className='contentHero2'>
                <h2>{tittle}</h2>
                <p>Home <span><FontAwesomeIcon icon={faChevronRight}/></span> {subTittle}</p>
            </div>
            <FontAwesomeIcon className='circleHero2' icon={faCircleDot} />
            
        </div>
    </>
)
}

export default Hero2