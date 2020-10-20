import React  from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar');
    //impedir que se renderize si sus propiedades son las mismas 


    return (
        <small>
            { value }
        </small>
    )
});

// Memoriza algo y solo se renderiza cuando sus properties cambian 