import React from 'react';

function Form(props) {
    return (
        <div>
                <div class="mb-3">
                <label for={props.label} class="form-label">{props.label}</label>
                <input type={props.type} class="form-control" id="exampleFormControlInput1" placeholder={props.label} ></input>
                </div>
        </div>
    )
};

export default Form;
