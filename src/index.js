import React from 'react';
import ReactDOM from 'react-dom';
import GasList from './view/GasList';
import FormPost from './view/FormPost';
import axios from "axios";


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [], link: []
        };
    }
    componentDidMount() {
        const GasUrl =
            "https://script.googleusercontent.com/macros/echo?user_content_key=WNsv86zuxO_VjtLQFrxOCcrgNr4zDl93jCBhgjkHDCPilQ--mDuoSKYQDsPP-H-IMW5Dif3Zsxy-eogSJQzAZm-gXpWX9tRbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCXHOZDwPOVnRbjP-r8vfPMY8dEOvqG4coUZKysh_aLPfhH32UPe6nHZy99cXRLigiT5VXRW9UUX&lib=MbbX_mfiSGyZNI21emFKhAj1zIcEc1DfX"
        axios
            .get(GasUrl)
            .then((response) => {
                const text = response.data;
                this.setState({text: text});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <FormPost/>
                <GasList text={this.state.text} />
            </div>
        );
    }

}


ReactDOM.render(<View/>, document.getElementById('root'));

