import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import NewIcon from '../../assets/New.svg';
import EditIcon from '../../assets/Edit.svg';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../styles/MuiTheme';
import NewPlaylist from './NewPlaylist';

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        primary: '#1DB954'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 400,
    },
    Card: {
        backgroundColor: '#1DB954',
        maxWidth: 400,
        flexGrow: 1,
    }
});


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            root: '',
            media: '',
        }
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
                <div style={{ width: '100%', marginTop: '100px' }}>
                    <Navbar />
                    <br />
                    {/* <Router> */}
                    <Grid container spacing={1} justify="center" alignItems="center">
                        <Grid item xs={3}>
                            <Link to="/newplaylist" style={{ textDecoration: 'none' }}>
                                <Card className={this.props.classes.Card} backgroundColor="primary">
                                    <CardActionArea>
                                        <CardMedia
                                            className={this.props.classes.media}
                                            image={NewIcon}
                                            title="Create new playlist"
                                            component="img"
                                            height="80"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Make a New Playlist
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Click here to begin building a new playlist.
                                            </Typography>
                                        </CardContent>
                                        {/* </Link> */}
                                    </CardActionArea>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Link>


                        </Grid>
                        <Grid item xs={3}>
                            <Link to="/editplaylist" style={{ textDecoration: 'none' }}>
                                <Card className={this.props.classes.Card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={this.props.classes.media}
                                            image={EditIcon}
                                            title="Edit or View existing playlists"
                                            component="img"
                                            height="80"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                View / Edit Existing Playlist
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Click here to view or edit any of your created playlists.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                    </CardActions>
                                </Card>
                            </Link>

                        </Grid>

                    </Grid>
                    {/* </Router> */}
                </div>
            </ThemeProvider >
        )
    }
};

export default withStyles(styles, { withTheme: true })(Main);