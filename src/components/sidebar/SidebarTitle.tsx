import React from 'react';

interface ISidebarProps {
    title: string;
    isSubtitle: boolean;
    callback: () => void;
}

const SidebarTitle = ({
    title,
    isSubtitle = false,
    callback,
}: ISidebarProps) => {
    return (
        <h2
            className={`text-xl flex items-center font-bold text-gray-700 transform transition-all duration-500 ${
                isSubtitle &&
                '-translate-y-3 text-sm text-gray-500 cursor-pointer'
            }`}
            onClick={callback}
        >
            {isSubtitle && (
                <img
                    className="w-2 h-2 "
                    src={require('../../assets/activo.png')}
                />
            )}
            {title}
        </h2>
    );
};

export default SidebarTitle;
