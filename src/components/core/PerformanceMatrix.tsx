import React from 'react'
import { Calendar } from 'lucide-react'
import Tabs from '../common/Tabs'
import { ChartComponent } from '../common/Charts'
import CheckOrder from './CheckOrder'
import TrackingPage from './TrackingPage'

const tabs = [
  {
    title: 'Life Time',
  },
  {
    title: 'Last Week',
  },
  {
    title: 'Last Month',
  },
  {
    title: 'Last Year',
  },
  {
    title: 'Custamize Time Link',
    icon: Calendar
  },
]

const PerformanceMatrix = () => {
  return (
    <section className=' max-w-7xl mx-auto py-5 '>
      <h2 className="text-2xl pt-5  pb-3 font-semibold text-center md:text-left">
        Instant Dive into Your Performance Metrics
      </h2>


      <div className='flex gap-5 mt-5 overflow-x-auto flex-wrap justify-center md:justify-start'>
        {
          tabs.map((tab, index) => (
            <Tabs key={index} {...tab} />
          ))
        }
      </div>

      <div className="grid  md:grid-cols-5 gap-5 mt-6 justify-center items-center ">
        <div className="col-span-2 flex justify-center ">
          <ChartComponent />
        </div>
        <div className="col-span-1  flex justify-center h-full ml-5 md:ml-0">
          <CheckOrder />
        </div>
        <div className="col-span-2 flex justify-center ">
          <TrackingPage />
        </div>
      </div>

    </section>
  )
}

export default PerformanceMatrix