import React from 'react'
import { cardContent } from '@/data/SectionCards'
import { CardComponent } from '../common/Cards'

const WelcomeSection = () => {
    return (
        <section className=' max-w-7xl mx-auto pb-5'>
            <h1 className="text-3xl py-5 font-semibold text-center md:text-left">Welcome , Ankush Mehra!!</h1>
            <div className="grid  md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5 xl:gap-0 justify-center md:px-10 xl:px-0">
                {
                    cardContent.map((card, i) => (
                        <CardComponent 
                            key={i}
                            {...card}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default WelcomeSection