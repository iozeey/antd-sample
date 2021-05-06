import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';

import LeadAppDesktop from './LeadAppDesktop';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#eee',

  }, 
}));
 
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#339CFE',
      main: '#0169CA',
      dark: '#0054A1',
    },
    secondary: {
      main: '#20B0A7',
      contrastText: '#ffffff',

    }
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#CBCED2',
        // '&::after':{
        //   content: '" "',
        //   position: 'absolute',
        //   bottom: '-15px',
        //   left: '45px',
        //   borderWidth: '15px 15px 0',
        //   borderStyle: 'solid',
        //   borderColor: '#CBCED2 transparent',
        //   display: 'block',
        //   width: 0,

        // }
      }
    },
    MuiTab: {
      wrapper: {
        flexDirection:'row',
        '& > svg': {
          marginBottom: '0 !important',
          marginRight: '8px !important',
        },
      },
      root: {
        "&:hover": {
          backgroundColor: '#0054A1',
          color: '#ffffff',
          opacity: 1
        }
      },
      textColorInherit: {
        backgroundColor: '#0054A1',
        color: '#ffffff',
        "&:hover": {
          backgroundColor: '#0054A1',
          color: '#ffffff'
        }
      }
    }
  }
});

function LeadApp() {
  const classes = useStyles();
   
  return ( 
    <ThemeProvider theme={theme}>
    <Container maxWidth={false} className={classes.root}>
      <CssBaseline />
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
          <Grid xs={24}>
            <Typography component='h5' variant='h5'>Lead Desktop view</Typography>
              <LeadAppDesktop />         
          </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default LeadApp;
