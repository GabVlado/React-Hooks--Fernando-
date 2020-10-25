import  { useState } from 'react'


export const useForm = (initialState = {}) => {      // En este caso intialState = {description:''}

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange  = ({target}) => {

        setValues({
            ...values,
            [target.name]:target.value
            
        })
        // console.log(target)
        // console.log(target.name)
        // console.log(target.value)
        // console.log(values);

    }
    //console.log(values);
    return [values, handleInputChange, reset];
}
