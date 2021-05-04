import React from 'react'

function Random(props){
    console.log(props)
    let randomValue= Math.floor(Math.random()*props.max)+1

    return(
        <div>
            <h1>Random value between {props.min} and {props.max}  = {randomValue}</h1>
        </div>
    )
}

export default Random