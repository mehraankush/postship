import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ButtonComponent from '../common/ButtonComponent'

const OnBoarding = () => {
  return (
    <Card className="flex gap-5 flex-col">
      <CardHeader className="items-start pb-0 space-y-1">
        <CardTitle className='text-sm font-semibold'>
          Exclusive Onboarding Support for High-Volume Brands
        </CardTitle>
        <CardDescription
          className='text-xs text-slate-600'
        >
          Unlock personalized guidance! Book a one-on-one
          onboarding call to streamline your experience.
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex gap-2'>
        <ButtonComponent
          title={'Schedule A Call'}
        />
      </CardFooter>

    </Card>
  )
}

export default OnBoarding