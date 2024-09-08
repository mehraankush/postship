import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ButtonComponent from '../common/ButtonComponent'
import Image from 'next/image'


const intergartions = [
    {
        img: '/inte/paypal.svg',
    },
    {
        img: '/inte/star.svg',
    },
    {
        img: '/inte/elec.svg',
    },
    {
        img: '/inte/grow.svg',
    },
    {
        img: '/inte/connection.svg',
    },
]
const IntegratedEco = () => {
    return (
        <Card className="flex gap-5 flex-col">
            <CardHeader className="items-start pb-0 space-y-1">
                <CardTitle className='text-sm font-semibold'>
                    Explore Our Integrated Ecosystem
                </CardTitle>
                <CardDescription
                    className='text-xs text-slate-600'
                >
                    Discover a variety of popular integrations tailored for your convenience.
                </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-5 items-center pt-2'>
                {
                    intergartions.map((item, index) => (
                        <Image
                            key={index}
                            src={item.img}
                            alt="integration"
                            width={100}
                            height={100}
                            className='h-10 w-10'
                        />
                    ))
                }
            </CardContent>

            <CardFooter className='flex gap-2'>
                <ButtonComponent
                    title={'Explore Integrations'}
                />
            </CardFooter>

        </Card>
    )
}

export default IntegratedEco