"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import EChartComponent, { chartData } from "./PieChart"


export function ChartComponent() {
    return (
        <Card className="flex flex-col shadow-none w-[400px] sm:w-[500px] md:w-full">
            <CardHeader className=" flex  pb-0 ">
                <div className="flex justify-between">
                    <CardTitle>Shipment Updates</CardTitle>
                    <CardDescription className="text-base">Total Orders : 394</CardDescription>
                </div>
                <div className="flex gap-5 overflow-x-auto pt-2">
                    {
                        chartData.map((data, i) => (
                            <ul key={i}>
                                <li className=" p-2 px-4 hover:bg-[#fff1e3] cursor-pointer rounded-md bg-slate-100 overflow-hidden line-clamp-1 max-w-[10rem]">{data.name}</li>
                            </ul>
                        ))
                    }

                </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0 -mt-4">
                <EChartComponent />
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
            </CardFooter>
        </Card>
    )
}
