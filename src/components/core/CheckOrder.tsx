import React from 'react'
import ButtonComponent from '../common/ButtonComponent'
import { Card } from '../ui/card'

const CheckOrder = () => {
    return (
        <Card className='bg-[#956f00] rounded-xl p-3 flex flex-col justify-between text-white shadow-none w-[400px] sm:w-[500px] md:w-full' >
            <p className='font-semibold'>Star Facts about your orders!!!</p>
            <p className='text-sm'>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
            <p className='tetx-sm'>There are 5 shipments in exception right now</p>
            <p className='text-sm'>The maximum chargebacks are from Miami.</p>

            <div className='md:pb-5'>
                <ButtonComponent
                title={"Check Order Page"}
                bgColor={'#fff'}
                textColor='#000'
            />
            </div>
        </Card>
    )
}

export default CheckOrder