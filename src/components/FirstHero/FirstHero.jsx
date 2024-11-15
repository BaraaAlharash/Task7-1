// import React from 'react'
import './FirstHero.css'
import personFirstHero from '../../../public/image/personFirstHero.webp'
import shapeFirstHero from '../../../public/image/shapeFirstHero.webp'
import shape2FirstHero from '../../../public/image/shape2FirstHero.webp'
import shape3FirstHero from '../../../public/image/shape3FirstHero.webp'
import profileShape1_1 from '../../../public/image/profileShape1_1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow ,faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

import { GoPulse } from "react-icons/go";
import { BsCheck2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FirstHero = () => {
  return (
    <div className="FirstHero ">
      <img className='personFirstHero' src={personFirstHero} alt="personFirstHero" />
      <img className='shapeFirstHero' src={shapeFirstHero} alt="shapeFirstHero" />
      <span className='technology'>Technology</span>
      <span className='solation'>Solation</span>
      <FontAwesomeIcon className='fontTechnology' icon={faLocationArrow} />
      <FontAwesomeIcon className='fontSolation' icon={faLocationArrow} />
      <img className='shape2FirstHero' src={shape2FirstHero} alt="shape2FirstHero" />
      <img className='shape3FirstHero' src={shape3FirstHero} alt="shape3FirstHero" />
      <div className='contentFirstHero w-50'>
        <span className='spanContentFirstHero' > 
          <GoPulse className='iconFirstHero'/>
          Everything You Need To Create A Website
        </span>
        <h1 className='h1ContentFirstHero w-75'>Business Innovation With IT Services Expertise</h1>
        <div className='divContentFirstHero'>
          <ul className='ulContentFirstHero'>
            <li>
              <BsCheck2 className='iconFirstHero'/>
              Deployment and Support
              </li>
            <li>
              <BsCheck2 className='iconFirstHero'/>
              Flexibility and Adaptability
            </li>
          </ul>
          <ul className='ulContentFirstHero'>
            <li>
              <BsCheck2 className='iconFirstHero'/>
              Discovery and Analysis
            </li>
            <li className='ps-2'>
              <BsCheck2 className='iconFirstHero'/>
              Competitive Advantage
            </li>
          </ul>
        </div>
        <button className='buttonContentFirstHero px-4'>
          GETSTARTED 
          <FontAwesomeIcon className='ps-2' icon={faArrowRightLong} />
        </button>
      </div>
      <div className='computeFirstHero '>
        <Row>
          <Col lg="6" sm="12" className='borderComputeFirstHero'>
            <h4 className='tittleComputeFirstHero'><FaStar className='customIconTittleHero'></FaStar>Trustipilot</h4>
            <div className='divComputeFirstHero'>
              <img className='profileShape1_1' src={profileShape1_1} alt="profileShape1_1" />
              <div>
                <FaStar className='iconComputeFirstHero' />
                <FaStar className='iconComputeFirstHero' />
                <FaStar className='iconComputeFirstHero' />
                <span>450+reviews</span>
              </div>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <h4 className='tittleComputeFirstHero'>Google</h4>
            <div className='divComputeFirstHero'>
              <img className='profileShape1_1' src={profileShape1_1} alt="profileShape1_1" />
              <div>
                <FaStar className='iconComputeFirstHero' />
                <FaStar className='iconComputeFirstHero' />
                <FaStar className='iconComputeFirstHero' />
                <span>450+reviews</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>  
    </div>
  )
}

export default FirstHero