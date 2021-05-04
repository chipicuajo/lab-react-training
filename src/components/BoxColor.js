import React from 'react'

function IdCard(props){
let  {r,g,b} = props
let hex ='#' +('0'+r.toString(16)).substr(-2) +('0'+g.toString(16)).substr(-2) +('0'+b.toString(16)).substr(-2)
let color = 'white'
if(r+g+b>127*3) color = 'black'

    return(
        <div>
            <div style={{
                backgroundColor: `rgb(${r},${g},${b})`,
                color: color,
            }}>
            rgb({r},{g},{b})<br/>
            {hex}
            </div>
        </div>
    )
}

export default IdCard