import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifListItem } from './GifListItem'

const GifCategory = ({category}) => {

    const { data:images , loading } = useFetchGifs(category)


    return (
        <>
        <h3>{category}</h3> 

        { loading && 'Cargando'  }

        <div className="card-grid" >
                {
                    images.map((img) => (
                        <GifListItem 
                            key={img.id}
                            {...img}
                        />

                    ))
                }
        </div>
    </>    
    )
}

export default GifCategory
