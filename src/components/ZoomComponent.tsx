import React from 'react';

interface IZoomComponentProps {
    log: (text: string) => void;
}

const ZoomComponent = ({ log }: IZoomComponentProps) => {
    return (
        <div className="flex flex-col justify-around bg-white rounded mx-2">
            <img
                className="w-8 h-8 p-1 cursor-pointer"
                src={require('../assets/+.png')}
                alt=""
                onClick={() => log('+ clicked')}
            />
            <hr />
            <img
                className="w-8 h-8 p-1 cursor-pointer"
                src={require('../assets/-.png')}
                alt=""
                onClick={() => log('- clicked')}
            />
        </div>
    );
};

export default ZoomComponent;
