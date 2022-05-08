import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Navigate.css'


const useStyles = makeStyles({
    
    root1: {
      maxWidth: 345,
      background: '#e0d8d880',
      margin:'auto',
    },
    root2: {
        maxWidth: 345,
        background: '#ffb8007d',
        margin:'auto',
      }
  });
  
  export default function Navigate() {
    const classes = useStyles();
  
    return (
        <div className='home' >
        <h1 className="heading">View Reports</h1>
        <div className='cards'>
      <Card className={classes.root1}>
        <div className='card'>
        <CardActionArea>
          <img component="img" alt="supplier" className='cardimg' width='100%' height="190" src={require(`./supplier.jpg`).default}/>   
          <CardContent>
            <div className='topic'>
            <Typography  gutterBottom variant="h5" component="h2">
                Supplier Management
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn'>
        <Link className='link' to={`/supplierreport/Sreport`}>
          <Button color="primary" >
            View
          </Button>
          </Link>
        </CardActions>
        </div>
      </Card>
      <Card className={classes.root2}>
        <div className='card'>
        <CardActionArea>
          <CardMedia component="img" alt="inventory" height="190" image={require(`./inventory.png`).default} title="done"/>
          <CardContent>
            <div className='topic'>
            <Typography  gutterBottom variant="h5" component="h2">
                Inventory Management
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn'>
        <Link className='link' to={`/`}>
          <Button color="primary" >
            View
          </Button>
          </Link>
        </CardActions>
        </div>
      </Card>
      </div>
      </div>
      
    );
  }
  