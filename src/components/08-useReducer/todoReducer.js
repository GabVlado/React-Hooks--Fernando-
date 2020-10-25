export const todoReducer  = ( state = [],action) => {

    switch ( action.type ) {
        case 'add':
            return [...state,action.payload]
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload)
        

        case 'toggle':                       //MIsmo toggle de abajo pero resumido con un ternario 
            return state.map(todo =>
                    (todo.id === action.payload)
                        ? {...todo,done: !todo.done }
                        :todo
                )

        case 'toggle-old':
            return state.map( todo => {

                if( todo.id  === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done 
                    }
                } else {             // toca regresar el todo en el map sino regresaria undefined
                    return todo; 
                }

            })
    
        default:
            return state;
    }
}