import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

const styles = theme => ({
    margin: {
        margin: theme.spacing(2)
        
    },
    padding: {
        padding: theme.spacing(2),
        marginTop: 15
    }
});

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        msg: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        console.log(this.state)
        this.props.login(this.state)
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding} >
                <form onSubmit={this.handleSubmit} className={classes.margin}>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="email" label="Email" name='email' type="email" defaultValue={this.state.email} onChange={this.handleChange} fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" label="Password" name='password' type="password" defaultValue={this.state.password} onChange={this.handleChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            
                        </Grid>
                        <Grid item>
                            <Button component={Link} to='/auth/register' disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Not registered yet? Regiter now</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type='submit' variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authState.isAuthenticated,
        errorReducer: state.errorReducer.errorReducer
    }
}
const mapDispatchToProps = dispatch => ({
    login: userInfo => dispatch(login(userInfo))
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm))