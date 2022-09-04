import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/sidebar/SidebarComponent';
import NavigatorComponent from './components/NavigatorComponent';
import ZoomComponent from './components/ZoomComponent';

const App = () => {
    const log = (text: string) => {
        console.log(text);
    };

    return (
        <div className="bg-gray-300 w-full h-full">
            <HeaderComponent />
            <SidebarComponent />
            <div className="absolute top-32 right-10 invisible md:visible">
                <div className="flex">
                    <div
                        className="bg-white rounded-lg px-8 py-3 mx-2 text-gray-700 font-medium text-lg cursor-pointer"
                        onClick={() => log('Fijar clicked')}
                    >
                        Fijar
                    </div>
                    <div
                        className="bg-white rounded-lg px-8 py-3 mx-2 text-gray-700 font-medium text-lg cursor-pointer"
                        onClick={() => log('Borrar clicked')}
                    >
                        Borrar
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-10 m-10 invisible md:visible">
                <div className="flex justify-between">
                    <ZoomComponent log={log} />
                    <NavigatorComponent log={log} />
                </div>
            </div>
        </div>
    );
};

export default App;
