import React from 'react';
import '../05-LayoutEffect/styles.css';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3 ml-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
