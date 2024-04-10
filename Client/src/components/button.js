import React from 'react';

function Button(props) {
    return (
        <button type="button" class="btn btn-outline-primary" id="btn2" onClick={props.onClick}   style={{
            borderColor: props.color,
            color: props.textColor  
          }}>{props.name}</button>
    )
}

export default Button;
