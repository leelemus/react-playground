import React from 'react';

class RoulleteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    static defaultProps = {
        bulletInChamber: 8
    }

    handleButtonClick = () => {

        this.setState({spinningTheChamber: true})

        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        },2000)
    }
    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return 'you\'re safe!'
        }
    }
    componentWillUnmount() {
        clearInterval(this.timeout)
    }
    render () {
        return (
            <div>
                <p>
                    {this.renderDisplay()}
                </p>
                <button onClick = {this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RoulleteGun;