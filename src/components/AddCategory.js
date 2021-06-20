import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [data, setdata] = useState("")

    const handleInputChange = (e) => {
        setdata(e.target.value)
    }

    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(data.length > 2){
            setCategories(cats => [data, ...cats])
            setdata("")
        }

    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text"
                value={data}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory