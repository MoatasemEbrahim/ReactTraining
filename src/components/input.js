import React from 'react'


function input (props){
    return (
        <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className={props.icon}></i></span>
            </div>
            <input onChange={props.handleChange} type={props.type} name={props.name} className="form-control" value={props.value} placeholder={props.placeholder}/>
        </div>
    )
}

export default input