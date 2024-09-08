import React from 'react'

type ButtonProps = {
    title: string;
    bgColor?: string | undefined;
    className?: string;
    textColor?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonProps> = ({
    title,
    bgColor = '#303030',
    textColor = 'white',
    className = '',
    onClick,
    style,
}) => {
    return (
        <button
            className={`text-xs p-[6px] px-3 rounded-md  ${className}`}
            style={{
                backgroundColor: bgColor,
                color: textColor,
                ...style,
            }}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default ButtonComponent
