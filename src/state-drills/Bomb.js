import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        msg: '0'
    }
    componentDidMount() {
        
        this.interval = setInterval(() =>{
            this.setState({count: this.state.count + 1})
            if (this.state.count >= 8) {
                this.setState({msg: 'BOOM!'})
            } else if (this.state.count % 2 === 0) {
                this.setState({msg: 'tick'})
            } else {
                this.setState({msg: 'tock'})
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default Bomb;