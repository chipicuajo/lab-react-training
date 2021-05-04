import React from 'react'

function IdCard(props){

    return(
        <div>
            <img src={props.picture} alt={props.firstName}/>
            <div>
                <b>FirstName : {props.firstName}</b><br></br>
                <b>LastName : {props.lastName}</b><br></br>
                <b>Gender : {props.gender}</b><br></br>
                <b>Height : {props.height}</b><br></br>
                <b>Birth : {props.birth.toDateString()}</b><br></br>
            </div>
        </div>
    )
}

export default IdCard