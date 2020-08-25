import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor() {
        //super is needed to use this
        super()
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <h1> There is an error </h1>
        }
        else{
            return this.props.children
        }
    }
}


export default ErrorBoundary;