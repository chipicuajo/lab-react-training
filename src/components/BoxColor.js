import React from 'react'

function IdCard(props){

    //cheated so hard on this one, it doesn't even make sense that I finished it.
let  {r,g,b} = props
let hex ='#' +('0'+r.toString(16)).substr(-2) +('0'+g.toString(16)).substr(-2) +('0'+b.toString(16)).substr(-2)
let colors = 'white'
if(r+g+b>127*3) colors = 'black'

    return(
        <div>
            <div style={{
                backgroundColor: `rgb(${r},${g},${b})`,
                colors: colors,
            }}>
            rgb({r},{g},{b})<br/>
            {hex}
            </div>
        </div>
    )
}

export default IdCard