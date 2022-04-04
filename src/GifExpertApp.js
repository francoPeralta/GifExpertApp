import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece', 'Full Metal Alchemist', 'Boku no Hero']);
    
    //const handleAdd = () => {
    //    setCategories([...categories, 'HunterXHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }> {category} </li>
                    })
                }
            </ol>
        </>
    )
}