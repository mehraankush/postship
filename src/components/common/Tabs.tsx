import React from 'react'

type TabProps = {
    title: string;
    icon?: React.ElementType | null;
}

const Tabs = ({ title, icon:Icon }: TabProps) => {
    return (
        <div
            className='p-2 bg-white text-xs border-2 border-white rounded-md px-4 font-medium cursor-pointer flex gap-2 items-center hover:border-blue-500'
        >
            {title}
            {Icon && <Icon size={15}/>}
        </div>
    )
}

export default Tabs