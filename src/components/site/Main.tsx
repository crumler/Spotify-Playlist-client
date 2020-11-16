import React from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

class Main extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
    return(
        <div>
            <Router>
            {/* <Searchbar /> */}
                <h1>Main Screen here!</h1>
            </Router>
        </div>
    )
}};

export default Main;