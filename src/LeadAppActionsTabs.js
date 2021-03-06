import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
  
 
import { ForwardIconSvg, NotificationsActiveIconSvg, AutorenewIconSvg, WarningIconSvg, ChatBubbleIconSvg, HeadsetMicIconSvg,
  HouseIconSvg, UserIconSvg, WheelIconSvg, DiskIconSvg } from './LeadAppIcons'


function TabPanel(props) {
    const { children, value, index, ...other } = props;  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }

  
const useStyles = makeStyles((theme) => ({
    leadAction: {
        // padding: theme.spacing(2) ,
        // backgroundColor: '#e6eef5',

        '& > header': {
          backgroundColor: '#EAEDF4',
        },
        '& > header button': {
            // backgroundColor: '#016ac4',
            // color: '#fff',
            minWidth: '16.666667%',
            minHeight: '40px',
            margin: theme.spacing(2, 0, 2, 2) ,
            padding: theme.spacing(0) ,    
            borderRadius: '3px',  
        },
        
    }, 
    leadActionPanel: {
        backgroundColor: '#CBCED2',
        position: 'relative',
        margin: theme.spacing(2, 0) ,
        '& > div': {
            padding: theme.spacing(2) ,      
        },
        '& button': {
          display: 'flex',
          justifyContent: 'start',
          padding: theme.spacing(1, 2) , 
        },
        '&::after':{
          content: '" "',
          position: 'absolute',
          top: '-8px',
          left: '45px',
          borderWidth: '0 15px 15px ',
          borderStyle: 'solid',
          borderColor: '#CBCED2 transparent',
          display: 'block',
          width: 0,

        }
    },
  }));
 
function ActionsTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChangeTabs = (event, newValue) => {
      setValue(newValue);
    };

    
    return (  
        <div className={classes.leadAction}>
            <AppBar position="static" color="primary">
                <Tabs
                value={value}
                onChange={handleChangeTabs}
                variant="fullWidth"
                scrollButtons="auto"
                aria-label="scrollable prevent tabs example"
                >
                <Tab icon={<ForwardIconSvg />} label="Forward" aria-label="forward" {...a11yProps(0)} />
                <Tab icon={<NotificationsActiveIconSvg />} label="Open" aria-label="open" {...a11yProps(1)} />
                <Tab icon={<AutorenewIconSvg />} label="Close" aria-label="close" {...a11yProps(2)} />
                <Tab icon={<WarningIconSvg />} label="Not My Lead" aria-label="not my lead" {...a11yProps(3)} />
                <Tab icon={<ChatBubbleIconSvg />} label="Chat" aria-label="chat" {...a11yProps(4)} />
                <Tab icon={<HeadsetMicIconSvg />} label="Support" aria-label="support" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.leadActionPanel} value={value} index={0}>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" color="primary" size="small"  startIcon={<HouseIconSvg />}>All Distributors</Button>
                    </Grid >
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" color="primary" size="small" startIcon={<UserIconSvg />}>Other TM</Button>
                    </Grid >
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" color="primary" size="small" startIcon={<WheelIconSvg />}>TM IBU</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button fullWidth variant="contained" color="primary" size="small" startIcon={<DiskIconSvg />}>Linear Specialist</Button>
                    </Grid>
                </Grid >
            </TabPanel>
            <TabPanel className={classes.leadActionPanel} value={value} index={1} arrow>
                Item Two 
            </TabPanel>
            <TabPanel className={classes.leadActionPanel} value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel className={classes.leadActionPanel} value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel className={classes.leadActionPanel} value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel className={classes.leadActionPanel} value={value} index={5}>
                Item Six
            </TabPanel> 
        </div >  
    )
}
export default ActionsTabs;