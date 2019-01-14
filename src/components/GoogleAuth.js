import React from 'react';

class GoogleAuth extends React.Component {

    state = {isSignedIn : null};  

    componentDidMount() {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId:'840644464882-t2mscdi6epashp1i8c24leh1dajgh4pf.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); 
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChanged);
            });
        });
    }
    onAuthChanged = () => {
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    };

    renderAuthButton() {

        if (this.state.isSignedIn === null) {
            return <div>I have No Idea</div>
        }
        else if (this.state.isSignedIn) {
            return <div>I signed in!</div>
        }
        else {
            return <div>I am not signed in!</div>
        }
    }


    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;