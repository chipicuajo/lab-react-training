import React from 'react'

function Random(props){

    let randomize= Math.floor(Math.random()*props.max)+1

    return(
        <div>
            <h1>Random value between {props.min} and {props.max}  = {randomize}</h1>
        </div>
    )
}

export default Random