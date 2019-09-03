import React from 'react'

export default props => {
    if(!props.hide){
        return(
            <button className={'btn btn-' + props.type} onClick={props.onClick} >
                <i className={'fa fa-' + props.icon}></i>
            </button>
        )
    } else{
        return null
    }
}