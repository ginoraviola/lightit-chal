import React from 'react';

interface INavigatorComponentProps {
    log: (text: string) => void;
}

const NavigatorComponent = ({ log }: INavigatorComponentProps) => {
    return (
        <div className="flex items-center -space-x-4 bg-white rounded cursor-pointer mx-2">
            <div className="flex p-1" onClick={() => log('left')}>
                <img
                    className="w-8 h-8 p-1 -rotate-90"
                    alt=""
                    src={require('../assets/Flecha.png')}
                />
            </div>
            <div className="flex flex-col space-y-1 py-2">
                <img
                    className="w-8 h-8 p-1 rotate-0"
                    alt=""
                    onClick={() => log('up')}
                    src={require('../assets/Flecha.png')}
                />
                <img
                    className="w-8 h-8 p-1 rotate-180"
                    alt=""
                    onClick={() => log('down')}
                    src={require('../assets/Flecha.png')}
                />
            </div>
            <div className="flex p-1" onClick={() => log('right')}>
                <img
                    className="w-8 h-8 p-1 rotate-90"
                    alt=""
                    src={require('../assets/Flecha.png')}
                />
            </div>
        </div>
    );
};

export default NavigatorComponent;
