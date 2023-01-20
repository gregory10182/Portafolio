import React from 'react'



export default function Technology({source, tech}) {
    return(
        <div className='Technology'>
            <img src={source} alt="" />
            <p>{tech}</p>
        </div>
    )
}