import React, { Component } from 'react'
// import {Form, Badge, Button } from 'react-bootstrap'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'

const styles = theme => ({
    margin: {
        margin: theme.spacing(2)
        
    },
    padding: {
        padding: theme.spacing(2),
        marginTop: 15
    }
});

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state
        console.log(this.state)
        this.props.register(this.state)
    }
    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.padding} >
                <form onSubmit={this.handleSubmit} className={classes.margin}>
                <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="name" name='name' label="Name" defaultValue={this.state.name} onChange={this.handleChange} fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="email" name='email' label="Email" type="email" defaultValue={this.state.email} onChange={this.handleChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" name='password' placeholder="Password" type="password" defaultValue={this.state.password} onChange={this.handleChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            
                        </Grid>
                        <Grid item>
                            <Button component={Link} to='/auth/login' disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Already have an account? Sign in</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type="submit" variant="outlined" color="primary" style={{ textTransform: "none" }}>Register</Button>
                    </Grid>
                </form>
            </Paper>
        );
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //         <h1>Sign Up For An Account</h1>

        //         <label>Username</label>
        //         <input
        //         name='name'
        //         placeholder='name'
        //         value={this.state.name}
        //         onChange={this.handleChange}
        //         /><br/>

        //         <label>Email</label>
        //         <input
        //         type='email'
        //         name='email'
        //         placeholder='email'
        //         value={this.state.email}
        //         onChange={this.handleChange}
        //         /><br/>

        //         <label>Password</label>
        //         <input
        //         type='password'
        //         name='password'
        //         placeholder='password'
        //         value={this.state.password}
        //         onChange={this.handleChange}
        //         /><br/>

                

            

        //         <input type='submit'/>
        //     </form>)
            // <Form onSubmit={this.onSubmit}>
            //     <h1><Badge variant="secondary"> Авторизация </Badge></h1>
            //     <Form.Group>
            //         <Form.Label> Email </Form.Label>
            //         <Form.Control type="email" name='email' id='email' placeholder="Введите email" />
            //         <Form.Text className="text-muted">
            //             We'll never share your email with anyone else.
            //         </Form.Text>
            //     </Form.Group>
    
            //     <Form.Group>
            //         <Form.Label>Пароль</Form.Label>
            //         <Form.Control type="password" name='password' id='password' placeholder="Пароль" />
            //     </Form.Group>
    
            //     <Button variant="primary" type="submit" >
            //         Войти
            //     </Button>
            // </Form>
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authState.isAuthenticated,
        errorReducer: state.errorReducer.errorReducer
    }
}
const mapDispatchToProps = dispatch => ({
    register: userInfo => dispatch(register(userInfo))
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegisterForm))