import React from 'react'


function input (props){
    return (
    <div>
        <div className="input-group mb-1">
            <div className="input-group-append">
                <span className="input-group-text"><i className={props.icon}></i></span>
            </div>
            <input onBlur={props.blur} onChange={props.handleChange} type={props.type} name={props.name} className="form-control" value={props.value} placeholder={props.placeholder}/>
        </div>
            {props.error ? <div className="mb-2">{props.error}</div> : null}
    </div>
    )
}

export default input