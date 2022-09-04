import React, { useState } from 'react';
import DropdownComponent from './DropdownComponent';

const HeaderComponent = () => {
    const options = [
        'Guardar y salir',
        'Salir sin guardar',
        'Guardar y continuar',
    ];
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div className="fixed w-full bg-neutral-800 py-2 z-20">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex">
                    <h1 className="text-white font-bold text-2xl">
                        LightIT Challenge
                    </h1>
                </div>
                <DropdownComponent
                    options={options}
                    onSelectedOption={(option) => setSelectedOption(option)}
                >
                    <span className="col-span-2 p-3 font-medium text-gray-700">
                        {selectedOption}
                    </span>
                </DropdownComponent>
            </div>
        </div>
    );
};

export default HeaderComponent;
