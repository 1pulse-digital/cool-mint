import React from 'react';
import { Ring } from 'react-css-spinners'

const Loading = () => {
    return (
        <div className="bg-background flex justify-center items-center h-screen">
            <Ring />
        </div>
    );
};
export default Loading;