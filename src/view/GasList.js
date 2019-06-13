import React from 'react';
import axios from "axios";

class GasList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.text.map((text,i)=><li key={i}><a href={text.Url}>{text.Title}</a></li>)}

            </ul>
        )
    }
}


export default GasList;
