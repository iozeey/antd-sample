import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MinimizeIcon from '@material-ui/icons/Minimize';
import {FireIconSvg} from './LeadAppIcons';
const useStyles = makeStyles((theme) => ({
    
    ActionCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    actionHeader: {
        '& h6 > button': {
            margin: theme.spacing(0, 0, 0, 2) ,
          },
      },
    vSpacing: {
        margin: theme.spacing(4, 0),
    },
  }));
 
function createData(leadDate, leadScore, companyName, cityState, country, brand, source, comments) {
    return { leadDate, leadScore, companyName, cityState, country, brand, source, comments };
  }
  
  const rows = [
    createData('December 20, 2021', 'Hot Lead', 'Country Pure Foods', 'Akron, OH', 'United States', 'Brand A', 'Customer Service', 'Looking for price and delivery on B35-A2 for our new project. Please contact customer for product or...more'), 
  ];
function Statistics() {
    const classes = useStyles();
    
    return ( 
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Lead Date</TableCell>
              <TableCell>Lead Score</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>City/State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell><MinimizeIcon /> {row.leadDate}</TableCell>
                <TableCell><FireIconSvg /> {row.leadScore}</TableCell>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.cityState}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell width="25%">{row.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    )
}
export default Statistics;