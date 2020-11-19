import React from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './Searchbar';

// class Main extends React.Component {
//     constructor(props: any) {
//         super(props);
//     }
interface Props {
    token: string;
    clickLogout: any;
}

const Main = (props:Props) => {
    
    return(
        <div>
            <Router>
            <SearchBar />
                <h1>Main Screen here!</h1>
                <div>
                    {localStorage.getItem('token') !== null ? <Button color='primary' onClick={props.clickLogout}>Logout</Button> : null}
                </div>
            </Router>
        </div>
    )
};

export default Main;