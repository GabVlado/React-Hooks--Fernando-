import  { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});


    useEffect(() => {
        
        return () => {                    // se Dispara cuando el componente se desmonte 
            isMounted.current = false;   //Esto no dispara una nueva renderizacion , solo mantiene la referencia al mismo

        }
    }, [])

    useEffect(() => {
        
        setState({data:null, loading:true, error: null})
        
        fetch(url)
            .then( resp =>  resp.json())
            .then(data => {

                    if(isMounted.current){
                      setState({
                        loading: false,
                        error: null,
                        data
                        })  
                    }                              
                
            })

    }, [url])
    return state;
}
