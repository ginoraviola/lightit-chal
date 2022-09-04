import React, { useCallback, useEffect, useState } from 'react';
import { ISection } from './SidebarComponent';
import SpinnerComponent from '../SpinnerComponent';
import SidebarTitle from './SidebarTitle';
import SidebarCategory from './SidebarCategory';

interface ISidebarMenuProps {
    selectedItem?: ISection;
    onClose: () => void;
}

export interface ICategory {
    name: string;
    items: {
        img: string;
        name: string;
    }[];
}

const SidebarDrawer = ({ selectedItem, onClose }: ISidebarMenuProps) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<ICategory>();
    const [loading, setLoading] = useState(true);

    const fetchItemData = useCallback(async (): Promise<void> => {
        if (selectedItem) {
            const { data } = await selectedItem.action();
            setCategories(data);
            setLoading(false);
        }
    }, [selectedItem]);

    useEffect(() => {
        setLoading(true);
        fetchItemData();
        setSelectedCategory(undefined);
    }, [fetchItemData, selectedItem]);

    const onCategorySelect = (category: ICategory) => {
        setSelectedCategory(category);
    };

    return (
        <div
            className={`left-0 bottom-0 fixed flex flex-col-reverse md:flex-row h-4/5 md:h-full justify-center items-center w-full md:w-2/5 transform ${
                !selectedItem &&
                'translate-y-full md:translate-y-0 md:-translate-x-full'
            } transition-all duration-500`}
        >
            <div className="h-screen bg-gray-200 flex w-full justify-center md:pl-40 px-6 pt-40 pb-6">
                {selectedItem && (
                    <div className="flex flex-col w-full items-start h-full">
                        <SidebarTitle
                            title={selectedItem.title}
                            isSubtitle={!!selectedCategory}
                            callback={() => setSelectedCategory(undefined)}
                        />

                        {loading && <SpinnerComponent />}

                        {!loading &&
                            !selectedCategory &&
                            categories.map(
                                (category: ICategory, index: number) => (
                                    <SidebarCategory
                                        key={index}
                                        category={category}
                                        onCategorySelect={() =>
                                            onCategorySelect(category)
                                        }
                                    />
                                )
                            )}

                        {selectedCategory && (
                            <>
                                <h2 className="text-xl text-gray-700 font-bold">
                                    {selectedCategory.name}
                                </h2>
                                <div className="flex justify-around items-center flex-wrap w-full mt-3">
                                    {selectedCategory.items.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center m-2 space-y-2"
                                            >
                                                <img
                                                    className="w-32 h-32 object-fill"
                                                    loading="lazy"
                                                    src={item.img}
                                                    alt={item.name}
                                                />
                                                <h2 className="text-sm font-medium text-gray-700 ml-2">
                                                    {item.name}
                                                </h2>
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div
                className="w-20 h-10 md:w-10 md:h-20 bg-gray-200 border-1 md:border-l-2 rounded-t-lg md:rounded-l-none md:rounded-r-lg items-center flex justify-center cursor-pointer"
                onClick={() => {
                    setSelectedCategory(undefined);
                    onClose();
                }}
            >
                <img
                    className="w-6 h-6 rotate-90 md:rotate-0"
                    src={require('../../assets/activo.png')}
                />
            </div>
        </div>
    );
};

export default SidebarDrawer;
