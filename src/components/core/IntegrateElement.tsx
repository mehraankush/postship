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

const IntegrateElement = () => {
    return (
        <Card className="flex gap-5 flex-col h-full">
            <CardHeader className="items-start pb-0 space-y-1">
                <CardTitle className='text-sm font-semibold'>
                    Seamlessly Integrate Custom HTML Elements
                </CardTitle>
                <CardDescription
                    className='text-xs text-slate-600'
                >
                    Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 flex flex-col gap-3 pt-10">

                <p>HTML Link</p>
                <textarea
                    name="html"
                    id="html"
                    cols={30}
                    className="w-full rounded-md border p-2 resize-none h-[7rem]"
                />
            </CardContent>
            <CardFooter className='flex gap-2'>
                <ButtonComponent
                    title="Preview"
                    bgColor='#fff'
                    textColor='#000'
                />
                <ButtonComponent
                    title="Apply Changes"
                    className='bg-black text-white'
                />
            </CardFooter>
        </Card>
    )
}

export default IntegrateElement

