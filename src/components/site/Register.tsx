import React, { useState } from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h1>Please create a new account below:</h1>
            <Grid container>
                <Grid item>
                    <TextField label='username'
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
                        <Button color='primary' variant='contained'>Create New Account</Button>
                </Grid>
            </Grid>
        </div>
        
    )
};

export default Register;