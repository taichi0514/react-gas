import React from 'react';
import ReactDOM from 'react-dom';
import GasList from './view/GasList';
import FormPost from './view/FormPost';
import axios from "axios";


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [],link:[]
        };
    }

    componentDidMount(){
        const GasUrlId = "1dE27_quEBEbixmBxdDdIBB16kDAk9GE7wZyF99gaWgM";
        const GasUrl =
            "https://spreadsheets.google.com/feeds/list/" +
            GasUrlId +
            "/od6/public/values?alt=json";
        return new Promise((resolve, reject) => {
            axios
                .get(GasUrl)
                .then((response) => {
                    const text = response.data.feed.entry;
                    console.log(text);
                    console.log(response);
                    text.map(text => {
                        console.log(text["gsx$title"]["$t"]);
                        console.log(text["gsx$url"]["$t"]);
                        this.setState ({text: text["gsx$title"]["$t"],link: text["gsx$url"]["$t"]});
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <FormPost/>
                <GasList text={[this.state.text]} link={this.state.link}/>
            </div>
        );
    }

}


ReactDOM.render(<View />, document.getElementById('root'));

