import React from 'react';

class GasList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [],link:[]
        };
    }
    render(){
        return(
            <ul>
                <li><a href={this.props.link}>{this.props.text}</a></li>
            </ul>
            )}
    }


export default GasList;
