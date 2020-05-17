import React from 'react'


const Stripes = props =>{
    const style = {
        backgroundColor: props.color
    }
    return(
        <div className={"Stripe"} style={style}>
            &nbsp;
        </div>
    )  
}

export default Stripes