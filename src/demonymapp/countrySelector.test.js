import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from './countrySelector';

describe(`Country Selector Component`, () => {
    it('Country Selector renders without issue', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountrySelector/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
})
