import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world.'
    }
    handleButtonClick = name => {
        this.setState({who: `${name.currentTarget.value}`})
    }
    render() {
        return (
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button onClick ={this.handleButtonClick} value="friend!">
                    friend!
                </button>
                <button onClick ={this.handleButtonClick} value="React!">
                    React!
                </button>
                <button onClick ={this.handleButtonClick} value="world!">
                    world!
                </button>
            </div>
        )
    }
}

export default HelloWorld;