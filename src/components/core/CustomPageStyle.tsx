import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import CustomColorInput from '../common/CustomColorInput'
import ButtonComponent from '../common/ButtonComponent'


const CustomPageStyle = () => {
    return (
        <Card className="flex gap-5 flex-col ">
            <CardHeader className="items-start pb-0 space-y-1">
                <CardTitle className='text-sm font-semibold'>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</CardTitle>
                <CardDescription
                    className='text-xs text-slate-600'
                >
                    Immerse your customers in a branded experience by personalizing the colors on your tracking page.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 flex flex-col gap-3 pt-2 space-y-3">

                <CustomColorInput
                    lable='Accent Color'
                    Hex={'FF9898'}
                />
                <CustomColorInput
                    lable='Text Color'
                    Hex={'571010'}
                />
                <CustomColorInput
                    lable='Background Color'
                    Hex={'FFEAEA'}
                />

            </CardContent>
            <CardFooter className='flex gap-2'>
                <ButtonComponent
                    title="Preview"
                    bgColor='#fff'
                    textColor='#000'
                />
                <ButtonComponent
                    title="Apply Color"
                    className='bg-black text-white'
                />
            </CardFooter>
        </Card>
    )
}

export default CustomPageStyle

