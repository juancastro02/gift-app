import { useState, useEffect } from "react"
import { handleGetApiData } from "../helpers/getGif"


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {


            handleGetApiData(category)
                .then((imagenes) => {
                    setState({
                        data: imagenes,
                        loading: false
                    })
                })
    
    
    }, [category])




    return state

}