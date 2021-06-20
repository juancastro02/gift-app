import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifCategory from './components/GifCategory'
// rafc snippet

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const onAdd = () => {

    //     setCategories([...categories, 'Hola4'])
    //     // setCategories(e => [...e, 'Hola4'] )

    // }

    return ( 
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ul>
                {
                    categories.map((category) => (
                        <GifCategory 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>

        </div>
    )

}

export default GiftExpertApp