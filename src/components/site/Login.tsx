import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import InputIcon from '@material-ui/icons/Input';

import SpotifyIcon from '../../assets/Spotify_Icon_RGB_Green.png';
import SpotifyLogo from '../../assets/Spotify_Logo_RGB_Green.png';

// const Login = (props: any) => {
    // const classes = useStyles();

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    // const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      primary: '#1DB954'
    },
  }),
);

//export interface SimpleDialogProps {
   
  //}

// interface ToggleProps {
//     ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

interface LoginState {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    open: boolean
}

interface LoginProps {
    updateToken?: any,
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            open: false
        }
        this.props.updateToken.bind(this)
    }


    handleRegisterSubmit = (e: any) => {
        e.preventDefault();
        fetch('http://localhost:5040/user/register', {
            method: 'POST',
            body: JSON.stringify({user: {firstName: this.state.firstName, lastName: this.state.lastName, username: this.state.username, password: this.state.password} }),
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            })
            alert('Your new account has now been created!')
            this.handleClose()
    };

    handleLoginSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:5040/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{ username: this.state.username, password: this.state.password }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            window.location.reload()
        })
    };

    handleClickOpen = () => {
        this.props.onOpen()
    }

    handleClose = () => {
        this.props.onClose()
    };

    render() {
    return(
        <div className="Login">
            <Grid container style={{ minHeight: '100vh'}}>
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
                        <form onSubmit={this.handleLoginSubmit}>
                        <TextField label="Username"
                        margin="normal"
                        InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>}}
                        style={{backgroundColor: 'white', color: 'white', borderRadius: '15px'}}
                        required
                        />
                        <TextField label="Password"
                        type='password'
                        margin="normal"
                        InputProps={{ startAdornment: <InputAdornment position='start'><LockRounded /></InputAdornment>}}
                        style={{backgroundColor: 'white', color: 'white', borderRadius: '15px'}}
                        required
                        />
                        <br />
                        <Button color='primary' variant='contained' type='submit' endIcon={<InputIcon />}>Login</Button>
                        </form>
                        <br />
                        
                        <Button variant='outlined' color='primary' onClick={this.handleClickOpen}>New User?  Please click here to register.</Button>
                        <form onSubmit={this.handleRegisterSubmit}>
                            <Dialog open={this.props.open} onClose={this.handleClose}>
                            <DialogTitle>Registration:</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>To create a new account, please enter your new username and password.  You may also enter your first and last name, if you wish.</DialogContentText>
                                    <TextField
                                    margin='dense'
                                    id='name'
                                    label='First Name:'
                                    fullWidth
                                    onChange={(e) => this.setState({firstName: e.target.value})}
                                    value={this.state.firstName}
                                    />
                                <br />
                                    <TextField
                                    margin='dense'
                                    id='name'
                                    label='Last Name:'
                                    fullWidth
                                    onChange={(e) => this.setState({lastName: e.target.value})}
                                    value={this.state.lastName}
                                    />
                                <br />
                                    <TextField
                                    margin='dense'
                                    id='name'
                                    label='Username:'
                                    fullWidth
                                    onChange={(e) => this.setState({username: e.target.value})}
                                    value={this.state.username}
                                    required
                                    />
                                <br />
                                    <TextField
                                    margin='dense'
                                    id='password'
                                    type='password'
                                    label='Password:'
                                    fullWidth
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    value={this.state.password}
                                    required
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color='primary'>
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleRegisterSubmit} color='primary'>
                                        Create Account
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </form>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
}};

export default Login;