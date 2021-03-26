
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
          


const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
    },
    leftBarCard:{
      backgroundColor: '#362f3c',
      color: '#ffffff',
    },
    leftBarCardHeader: {
      backgroundColor: '#bfbbc7',
    },
    leftBarCardContent: {
      '& dt': {
        color: '#a58c8c',
      },
    },
    appCardHeader: {
      backgroundColor: '#F7F7F7',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    vendorsList: {
      backgroundColor: '#F7F7F7',
    },
    applicationArea: {
      backgroundColor: '#f1f1f1',
    },
  }));
  
  function createData(name, cat, license, appcontract, billing, payment) {
    return { name, cat, license, appcontract, billing, payment };
  }
  
  const rows = [
    createData('iPad', '123abc', 6.0, 'No', 4.0, 'in progress'),
    createData('iPod', 'abc237', 9.0, 37, 4.3 , 'pending'),
    createData('Iphone', 'xyzcat', 16.0, 24, 6.0, 'under construction'),
    createData('iTunes', '305lmn', 3.7, 67, 4.3, '----'),
    createData('Crossy Road', '356pqr', 16.0, 49, 3.9, '----'),
    createData('Safari', '356pqr', 16.0, 49, 3.9, '----'),
  ];
function Vendor() {
    const classes = useStyles();
   
    return ( 
            <Box mx="auto" p={3} className={classes.applicationArea}>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
                <Grid className={classes.leftBar} item xs={12} md={4} lg={3}>             
                  <Card className={classes.leftBarCard}>
                    <CardHeader className={classes.leftBarCardHeader}             
                      title="Mr. Vladimir Preobrazhensky"
                      subheader="July 10, 2008"
                    /> 
                    <CardContent className={classes.leftBarCardContent}  >
                      <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                          <Typography component='h6' variant='h6'>Personal Information</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Website</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>www.appstore.com</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Telephone</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>+371 29231472</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'># of Applications</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>4 Applications</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Source</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>Expensify</Typography> 
                        </Grid> 
                        <Grid item xs={12}>
                          <Typography component='h6' variant='h6'>Expense Information</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Contract</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>Inactive</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Contract Value</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>$1</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Total Spend (YTD)</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>$1,212</Typography> 
                        </Grid> 
                        <Grid item xs={6}>
                          <Typography component='dt' variant='body2'>Total Spend (Last 12 months)</Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography align="right" component='dd' variant='body2'>$1,212</Typography> 
                        </Grid>                       
                      </Grid>                      
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8} lg={9}> 
                  <Card className={classes.appCard}>
                      <CardHeader className={classes.appCardHeader}             
                        title="List of Apple Store Applications"
                        subheader="Total 500 applications available from apple store vendor"
                      /> 
                      <CardContent className={classes.appCardContent}  >
                        <TableContainer component={Paper}>
                          <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Application Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell align="right">Licenses Bought</TableCell>
                                <TableCell align="right">App Covered in Contract</TableCell>
                                <TableCell align="right">Billing Frequency</TableCell>
                                <TableCell>Payment Terms</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">{row.name}</TableCell>
                                  <TableCell>{row.cat}</TableCell>
                                  <TableCell align="right">{row.license}</TableCell>
                                  <TableCell align="right">{row.appcontract}</TableCell>
                                  <TableCell align="right">{row.billing}</TableCell>
                                  <TableCell>{row.payment}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
    )
}
export default Vendor;