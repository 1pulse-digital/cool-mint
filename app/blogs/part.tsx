import React, { ReactNode } from 'react';

interface PartProps {
    children: ReactNode;
    background: string;
}

const Part: React.FC<PartProps> = ({ children, background }) => {
    return <div className='bg-primary text-primary-foreground text-center uppercase'>{children}</div>;
};

export default Part;