// import React from 'react'
import './Brands.css'
import brandLogo1_1 from '../../../public/image/brandLogo1_1.svg'
import brandLogo1_2 from '../../../public/image/brandLogo1_2.svg'
import brandLogo1_3 from '../../../public/image/brandLogo1_3.svg'
import brandLogo1_4 from '../../../public/image/brandLogo1_4.svg'
import brandLogo1_5 from '../../../public/image/brandLogo1_5.svg'
import brandLogo2 from '../../../public/image/brandLogo2.svg'
export const Brands = ({brand}) => {
  return (
    <>
        {brand&&(
            <div className='brandsHome'>
                <img className='imgBrands1_1' src={brandLogo1_1} alt="brandLogo1_1"/>
                <img className='imgBrands1_2' src={brandLogo1_2} alt="brandLogo1_2"/>
                <img className='imgBrands1_3' src={brandLogo1_3} alt="brandLogo1_3"/>
                <img className='imgBrands1_4' src={brandLogo1_4} alt="brandLogo1_4"/>
                <img className='imgBrands1_5' src={brandLogo1_5} alt="brandLogo1_5"/>
            </div>
        )}
        {!brand&&(
            <div className='brandsAbout'>
                    <img className='imgBrandsAbout1' src={brandLogo2} alt="brandLogo2" />
                    <p className='tittleBrandsAbout1'>CyberSecurity</p>
                    
                    <img className='imgBrandsAbout1' src={brandLogo2} alt="brandLogo2" />
                    <p className='tittleBrandsAbout2'>ITSolution</p>
                    
                    <img className='imgBrandsAbout2' src={brandLogo2} alt="brandLogo2" />
                    <p className='tittleBrandsAbout3'>Technology</p>
                    
                    <img className='imgBrandsAbout3' src={brandLogo2} alt="brandLogo2" />
                    <p className='tittleBrandsAbout4'>DataSecurity</p>
            </div>
        )}
    </>
  )
}
