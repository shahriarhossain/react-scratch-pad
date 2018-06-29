import React, {Component}  from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false,
            errorMsg: null
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({
            hasError : true,
            errorMsg: info
        })

        //TODO: log the error to an error reporting service
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;