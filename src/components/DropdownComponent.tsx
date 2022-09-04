import React, { useRef, useState } from 'react';
import { useClickedOutside } from '../utils';

interface IDropdownComponentProps {
    children: React.ReactNode;
    options: string[];
    onSelectedOption: (option: string) => void;
}

const DropdownComponent = ({
    children,
    options,
    onSelectedOption,
}: IDropdownComponentProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef(null);

    useClickedOutside(wrapperRef, () => isOpen && setIsOpen(false));

    const onSelect = (option: string): void => {
        onSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative grid grid-cols-3 gap-2 divide-x items-center rounded-lg bg-white cursor-pointer shadow">
            {children}
            <div
                className="flex justify-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    className="w-5 h-5 -rotate-90"
                    src={require('../assets/activo.png')}
                />
            </div>

            {isOpen && (
                <div
                    id="dropdown"
                    ref={wrapperRef}
                    className="absolute top-full mt-1 right-0 z-10 w-full bg-white rounded divide-y divide-gray-100 shadow"
                >
                    <ul className="py-1 text-sm text-gray-700">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => onSelect(option)}>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100"
                                >
                                    {option}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownComponent;
