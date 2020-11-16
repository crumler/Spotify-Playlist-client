import React, { useState } from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SpotifyIcon from '../../assets/Spotify_Icon_RGB_Green.png';
import SpotifyLogo from '../../assets/Spotify_Logo_RGB_Green.png';

// class Login extends React.Component {
//     constructor(props: string) {
//         super(props);
//     }

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = React.useState(false);

    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch()
    //     method: 'POST',
    //     body: JSON.stringify({user: {firstName: firstName, lastName: lastName, username: username, password: password} }),
    //     headers: new Headers({
    //         'Content-Type': 'appliation/json'
    //     })
    //     {).then{
    //         (response> => Response.json()
    //     ).then((data) => {
    //         props.updateToken(data.sessionToken);
    //     }).then
    //         (alert('You have created your new account!'))
    // }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
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
                        value={username}
                        InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>}}
                        style={{color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
                        />
                        <TextField label="Password"
                        type='password'
                        margin="normal"
                        value={password}
                        InputProps={{ startAdornment: <InputAdornment position='start'><LockRounded /></InputAdornment>}}
                        style={{color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
                        />
                        <br />
                        <Button color='primary' variant='contained'>Login</Button>
                        <br />
                        {/* <Button style={{color: 'white'}} onClick=<Link to="/register">New User?  Please click here.</Link></Button> */}
                        <Button variant='outlined' color='primary' onClick={handleClickOpen}>New User?  Please click here to register.</Button>
                        {/* <form onSubmit={handleSubmit}> */}
                            <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Registration:</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>To create a new account, please enter in your new username and password.</DialogContentText>
                                    <TextField
                                    margin='dense'
                                    id='name'
                                    label='Username:'
                                    fullWidth
                                    />
                                <br />
                                    <TextField
                                    margin='dense'
                                    id='password'
                                    type='password'
                                    label='Password:'
                                    fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color='primary'>
                                        Cancel
                                    </Button>
                                    <Button onClick={handleClose} color='primary'>
                                        Create Account
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        {/* </form> */}
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
};

export default Login;