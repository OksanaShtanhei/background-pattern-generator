import React from 'react'

const Cell = ({cellStyles}) => {  
    return (
        <>
            <div className="cell bg-dark col" 
                 style={cellStyles}
                 >
            </div>
        </>
    )
}
export default Cell