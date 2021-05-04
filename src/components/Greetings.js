import React from 'react'

function Greetings(props){
    console.log(props)
    let greetings = {
        de: 'Hallo',
        en: 'Hello',
        fr: 'Bonjour',
        es: 'Hola',
      }

    return(
        <div>
            <h1>
            {greetings[props.lang]} {props.children}
            </h1>
        </div>
    )
}

export default Greetings