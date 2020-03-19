import React, { Component } from "react";
//import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class EnterAddress extends Component {

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/results');
    }


    render() {
        return (
            <div id="locationField">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        id="autocomplete"
                        placeholder=""
                        onFocus="geolocate()"
                        type="text">
                    </input>
                </form>

                <button type="submit">ENTER </button>

            </div>


            );
    }
}

export default EnterAddress;
