import React from 'react';
import {Grid} from '@material-ui/core';

const Footer = () => {
    return(
        <Grid container justify='center' style={{backgroundColor: '#191414'}}>
            <Grid item>
        <p style={{color:'white'}}>Powered by "Spotify for Developers" API</p>
            </Grid>
        </Grid>
    )
}

export default Footer;