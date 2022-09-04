import React, { useState } from 'react';
import SidebarSection from './SidebarSection';
import { getApertures, getEquipments, getRefinements } from '../../api';
import { AxiosResponse } from 'axios';
import SidebarDrawer from './SidebarDrawer';

export interface ISection {
    id: number;
    title: string;
    img: any;
    action: () => Promise<AxiosResponse<any, any>>;
}

const SidebarComponent = () => {
    const [selectedSection, setSelectedSection] = useState<ISection>();

    const sections: ISection[] = [
        {
            id: 1,
            title: 'Aberturas',
            img: require('../../assets/Aberturas.png'),
            action: getApertures,
        },
        {
            id: 2,
            title: 'Equipamiento',
            img: require('../../assets/Equipamiento.png'),
            action: getEquipments,
        },
        {
            id: 3,
            title: 'Terminaciones',
            img: require('../../assets/Terminaciones.png'),
            action: getRefinements,
        },
    ];

    const onItemSelected = (id: number): void => {
        if (selectedSection?.id === id) {
            setSelectedSection(undefined);
            return;
        }
        setSelectedSection(sections[id - 1]);
    };

    return (
        <>
            <SidebarDrawer
                selectedItem={selectedSection}
                onClose={() => setSelectedSection(undefined)}
            />
            <div className="bottom-0 md:bottom-auto md:left-0 fixed flex md:h-screen justify-center w-full md:w-32 bg-gray-100">
                <div className="flex md:flex-col justify-center w-full h-full">
                    {sections.map((section, index) => (
                        <SidebarSection
                            key={index}
                            {...section}
                            isSelected={selectedSection?.id === section.id}
                            onClicked={() => onItemSelected(section.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SidebarComponent;
