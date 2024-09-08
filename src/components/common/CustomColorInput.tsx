import React from 'react'

type CustomINputProps = {
    lable: string;
    Hex: string;
}

const CustomColorInput: React.FC<CustomINputProps> = ({
    lable,
    Hex
}) => {
    return (
        <div className='flex flex-col justify-between  w-full'>
            <label htmlFor="accent-color" className='text-xs'>{lable}</label>
            <div className='flex items-center gap-3 '>
                <input
                    id='accent-color'
                    type='text'
                    placeholder='Accent Color'
                    value={Hex || 'FF9898'}
                    className='uppercase p-1 px-2 rounded-xl  border text-sm w-4/5'
                />
                <div
                    className='rounded-xl  h-8 bg-[#ff9898] align-bottom p-2 w-[20%]'
                    style={{ backgroundColor: `#${Hex}` }}
                >
                </div>
            </div>
        </div>
    )
}

export default CustomColorInput