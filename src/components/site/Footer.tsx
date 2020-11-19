import React from 'react';
import {Grid} from '@material-ui/core';

class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }

render() {
    return(
        <Grid container justify='center' style={{backgroundColor: '#191414'}}>
        <Grid item>
            <p>Powered by "Spotify for Developers" API</p>
        </Grid>
    </Grid>
    )
}}

export default Footer;