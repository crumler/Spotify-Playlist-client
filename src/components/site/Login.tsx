import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';

import SpotifyIcon from '../../assets/Spotify_Icon_RGB_Green.png';
import SpotifyLogo from '../../assets/Spotify_Logo_RGB_Green.png';

const Login: React.FunctionComponent = () => {
    return(
        <div className="Login">
            <Grid container style={{ minHeight: '100vh', backgroundColor: '#191414' }}>
                <Grid item alignItems='center' xs={12} sm={6} style={{ marginTop: 'auto', marginBottom: 'auto'}}>
                    <img src={SpotifyLogo} style={{ width: '50%', height: '50%'}} alt="Official Spotify Logo" />
                </Grid>
                <Grid container item xs={12} sm={6} alignItems='center' direction='column' justify='space-between' style={{padding: 10}}>
                    <div />
                    <div style ={{ display:'flex', flexDirection:'column', maxWidth: 400, minWidth: 300 }}>
                        <Grid container justify='center'>
                            <img src={SpotifyIcon}
                            style={{width: '200px'}}
                            alt="Official Spotify Logo" />
                        </Grid>
                        <TextField label="Username"
                        margin="normal"
                        InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>}}
                        style={{color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
                        />
                        <TextField label="Password"
                        type='password'
                        margin="normal"
                        InputProps={{ startAdornment: <InputAdornment position='start'><LockRounded /></InputAdornment>}}
                        style={{color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
                        />
                        <br />
                        <Button color='primary' variant='contained'>Login</Button>
                        <br />
                        <Button style={{color: 'white'}}>New User?  Please click here.</Button>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
};

export default Login;