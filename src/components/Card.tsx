import React, {FC, useState} from 'react';

export enum CardVariant {
    outline= 'outline',
    primary= 'primary'
}

interface CardProps {
    width: string;
    height: string;
    children: React.ReactChild | React.ReactNode;
    variant: CardVariant,
    onClick: ( num : number) => void
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    const [click, setClick] = useState(0);
    return (
        <div style={{ 
            width, 
            height, 
            border: variant === CardVariant.outline ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
            onClick={() => onClick(click)}
            >
            {children}
        </div>
    );
};

export default Card;