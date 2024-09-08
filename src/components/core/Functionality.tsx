import React from 'react'
import CustomPageStyle from './CustomPageStyle'
import IntegrateElement from './IntegrateElement'
import OnBoarding from './OnBoarding'
import IntegratedEco from './IntegratedEco'

const Functionality = () => {
  return (
    <section className='max-w-7xl mx-auto py-5 pb-[60px]'>

      <h2 className="text-2xl pt-5  pb-3 font-semibold text-center md:text-left">
        Discover the Heart of Our Functionality
      </h2>


      <div className='mt-5 flex flex-col items-center  md:flex-row md:justify-between gap-5'>
        <div className='  w-[400px] sm:w-[500px] md:w-[30%] flex justify-center'>
          <CustomPageStyle />
        </div>
        <div className='flex flex-col gap-2  w-[400px] sm:w-[500px] md:w-[40%]  justify-center'>
          <OnBoarding />
          <IntegratedEco />
        </div>
        <div className=' w-[400px] sm:w-[500px] md:w-[30%] flex justify-center'>
          <IntegrateElement />
        </div>
      </div>
    </section>
  )
}

export default Functionality