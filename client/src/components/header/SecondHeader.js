import React from "react";
import { Link } from 'react-router-dom'
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Paper, Button, Typography, InputBase, Tabs, Tab } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from "@material-ui/core/Toolbar";
import TransitionsModal from '../modal/modal'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    
  },
  grid: {
    width: "100%",
    margin: "0px"
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.inherit,
    // background: theme.palette.success.light
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.success.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.success.main, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HeadBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
      

  return (
    <div className={classes.root} >
      <AppBar position="static" color="inherit" >
        <Toolbar >
          <Grid container spacing={2} className={classes.grid} alignItems='baseline' >
            
              <Grid item xs={3} >
                <Typography variant="h5" className={classes.paper} gutterBottom>
                  Name
                </Typography>
              </Grid>
              <Grid item xs={3} >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab component={Link} to='/catalog' label="Каталог" {...a11yProps(1)} />
                </Tabs>
              </Grid>
              <Grid item xs={3} >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </Grid>
              
              <Grid item xs={1} >
                <TransitionsModal />
              </Grid>
              <Grid item xs={1} >
                <Button component={Link} to='/admin' size="small" variant="contained"> Admin </Button>
              </Grid>
              <Grid item xs={1} >
                <Button component={Link} to='/auth/login' size="small" variant="contained"> Login </Button>
              </Grid>
            
            
              
              
            
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
