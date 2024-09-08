"use client"
import React from 'react';
import ButtonComponent from './ButtonComponent';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


type ButtonType = {
    title: string;
    color?: string;
    textColor?: string;
}
type CardProps = {
    title: string;
    description: string;
    btns: ButtonType[];
    bgColor: string;
    textColor?: string;
    TitleIcon?:React.ElementType | undefined ;
}

export const CardComponent: React.FC<CardProps> = ({
    title,
    description,
    btns,
    bgColor,
    TitleIcon
}) => {
    return (
        <Card
            className={`flex flex-col gap-5 h-full w-[360px] border shadow-sm p-1`}
            style={{ backgroundColor: bgColor }}
        >
            <CardHeader className="items-start pb-0 space-y-1 h-4/5 overflow-hidden">
                <CardTitle className='text-sm font-semibold line-clamp-1 flex items-center gap-2'>
                    {TitleIcon && <TitleIcon size={15} />}  {title}
                </CardTitle>
                <CardDescription
                    className='text-sm font-normal '
                >
                    {description}
                </CardDescription>
            </CardHeader>

            <CardFooter className='flex gap-2'>
                <div className='flex gap-5 '>
                    {btns.map((btn, index) => (
                        <ButtonComponent
                            key={index}
                            title={btn.title}
                            bgColor={btn.color}
                            textColor={btn.textColor ? '#000' : '#fff'}
                        />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}