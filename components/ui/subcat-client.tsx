'use client'

import { useState } from "react";
import Subcategories from "./subcategories";
import CardsContainer from "../card/cards-container";

interface SubcatClientProps {
    initialResources: any[];
    subcategories: string[];
}

const SubcatClient: React.FC<SubcatClientProps> = ({ initialResources, subcategories }) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState('All');

    const [filteredResources, setFilteredResources] = useState(initialResources);

    const handleSubcategorySelect = (subcategory: any) => {
        setSelectedSubcategory(subcategory);
        const newFilteredResources = initialResources.filter(resource => resource.fields.subcat.includes(subcategory));
        if (subcategory === 'All') {
            setFilteredResources(initialResources);
        } else {
            setFilteredResources(newFilteredResources);
        }
    };

    return (
        <>
            <Subcategories subcategories={subcategories} onSelect={handleSubcategorySelect} selectedSubcategory={selectedSubcategory} />
            <CardsContainer resources={filteredResources} />
        </>
    );
}

export default SubcatClient;