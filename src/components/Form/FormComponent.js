import React, { useState } from 'react';
import './Form.css';

const FormComponent = (props) => {
    let initialState = "Not Submitted";
    const [state, setState] = useState(initialState)
    const handleSubmit = () => {
        setState("Submitted");
    }

    return(
        <div className="form-container">
            <h2>Form Template</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="input-container">
                    <div className="labelElement">
                        <label aria-label="firstName" for="firstName">First Name: </label>
                    </div>
                    <div className="inputElement">
                        <input type="text" id="firstName" name="firstName" value="Andres"></input>
                    </div>
                </div>
                <div className="input-container">
                    <div className="labelElement">
                        <label aria-label="lastName" for="lastName">Last Name: </label>
                    </div>
                    <div className="inputElement">
                        <input type="text" id="lastName" name="lastName" value="Salinas"></input>
                    </div>
                </div>
                <div className="input-container">
                    <div className="labelElement">
                        <label aria-label="email" for="email">Email: </label>
                    </div>
                    <div className="inputElement">
                        <input type="text" id="email" name="email" value="asali018@fiu.edu"></input>
                    </div>
                </div>
                <div className="input-container">
                    <div className="labelElement">
                        <label aria-label="major" for="major">Major: </label>
                    </div>
                    <div className="inputElement">
                        <input type="text" id="major" name="major" value="Computer Science"></input>
                    </div>
                </div>
                <div className="input-container">
                    <div className="labelElement">
                        <label aria-label="graduation date" for="gradDate">Date: </label>
                    </div>
                    <div className="inputElement">
                        <input type="date" id="date" name="date" value="8/16/2020"></input>
                    </div>
                </div>
                <input aria-label="submit form" className="submitButton" type="submit" value="Submit" onClick={handleSubmit}></input>
                <h4>
                    Form: {state}
                </h4>
            </form>
        </div>
    );
}

export default FormComponent;