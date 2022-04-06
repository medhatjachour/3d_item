import React from 'react';

const ButtonsGroup = (props) => {
    return (
        <>
           <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=> props.appliedFilter}>all</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> props.appliedFilter}>Women's clothing</button>
                    <button className="btn btn-outline-dark me-2">men's clothing</button>
                    <button className="btn btn-outline-dark me-2">men's clothing</button>
            </div> 
        </>
    );
}

export default ButtonsGroup;
