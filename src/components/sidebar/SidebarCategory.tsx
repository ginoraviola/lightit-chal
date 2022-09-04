import React from 'react';
import { ICategory } from './SidebarDrawer';

interface ISidebarCategoryProps {
    category: ICategory;
    onCategorySelect: () => void;
}

const SidebarCategory = ({
    category,
    onCategorySelect,
}: ISidebarCategoryProps) => {
    return (
        <div
            className="flex w-full justify-between items-center bg-white rounded-xl my-2 px-3 py-1 cursor-pointer"
            onClick={onCategorySelect}
        >
            <div className="text-gray-700 p-3">{category.name}</div>
            <img
                className="w-6 h-6 rotate-180"
                src={require('../../assets/activo.png')}
            />
        </div>
    );
};

export default SidebarCategory;
