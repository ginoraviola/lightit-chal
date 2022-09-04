import React from 'react';

interface ISidebarItemProps {
    title: string;
    img: any;
    onClicked: () => void;
    isSelected: boolean;
}

const SidebarSection = ({
    title,
    img,
    onClicked,
    isSelected,
}: ISidebarItemProps) => {
    return (
        <div
            className={`p-2 flex justify-center cursor-pointer hover:bg-gray-200 ${
                isSelected && 'bg-gray-200'
            }`}
            onClick={onClicked}
        >
            <div className="flex flex-col justify-center items-center">
                <img className="w-12 h-12" alt={title} src={img} />
                <span className="text-gray-600 text-sm">{title}</span>
            </div>
        </div>
    );
};

export default SidebarSection;
