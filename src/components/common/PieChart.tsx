"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const chartData = [
    { value: 1048, name: 'Exception' },
    { value: 735, name: 'Intransit' },
    { value: 580, name: 'Pending' },
    { value: 484, name: 'Delivered' },
    { value: 300, name: 'Out for delivery' }
];

const EChartComponent: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current, 'light');
            const option: echarts.EChartsOption = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'horizontal',
                    left: 'left',
                    bottom: 'bottom',
                    itemWidth: 20,
                    itemHeight: 14,
                    textStyle: {
                        fontSize: 14,
                        color: '#333'
                    },
                    itemStyle: {
                        borderRadius: [15, 15, 15, 15],

                    }
                },
                series: [
                    {
                        name: 'Delivery Status',
                        type: 'pie',
                        radius: '50%',
                        data: chartData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            show: false
                        },

                    }
                ],

                color: ['#956F00', '#5EA200', '#FFDDB6', '#FFC879', '#E5A500']
            };
            myChart.setOption(option);

            // Resize the chart on window resize
            const handleResize = () => {
                myChart.resize();
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                myChart.dispose();
            };
        }
    }, [chartData]);

    return (
        <div >
            <div
                ref={chartRef}
                style={{ width: '100%', height: '290px' }}
            />
        </div>
    );
};

export default EChartComponent;
