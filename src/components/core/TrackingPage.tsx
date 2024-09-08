import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


const TrackingPage = () => {
    return (
        <Card className="flex gap-5 flex-col shadow-none w-[400px] sm:w-[500px] md:w-full">
            <CardHeader className="items-start pb-0 space-y-3">
                <CardTitle>Tracking Page Views Vs Orders</CardTitle>
                <CardDescription
                    className='text-sm text-slate-600'
                >
                    Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 flex flex-col gap-5 pt-2">

                <div className='flex justify-between bg-[#ffebd5] rounded-xl p-4 py-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs '>Orders</p>
                        <p className='text-4xl font-bold'>80</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/Order.svg'
                            alt='order'
                            width={100}
                            height={100}
                            className='h-10 w-10'
                        />
                    </div>
                </div>

                <div className='flex justify-between bg-[#ffc879] rounded-xl p-4 py-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs '>Treking Page Views</p>
                        <p className='text-4xl font-bold'>44</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/Eye.svg'
                            alt='order'
                            width={100}
                            height={100}
                            className='h-10 w-10'
                        />
                    </div>
                </div>

            </CardContent>
            <CardFooter >
            </CardFooter>
        </Card>
    )
}

export default TrackingPage

