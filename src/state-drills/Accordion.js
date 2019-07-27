import React from 'react';

class Accordion extends React.Component {

    static defaultProps = {sections: []};

    state = {
        currentIndex: null,
    };

    renderButtonSection(section, index, currentIndex) {
        return (
            <li key={index}>
                <button onClick = {() => this.buttonHandler(index)}>
                    {section.title}
                </button>
                {(currentIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    buttonHandler (index) {
        this.setState({currentIndex: index});
    }

    render() {
        const {currentIndex} = this.state;
        const { sections } = this.props;

        return (
            <ul>
                {sections.map((section, index) => 
                    this.renderButtonSection(section, index, currentIndex)
                )}
            </ul>
        );
    }

}

export default Accordion;