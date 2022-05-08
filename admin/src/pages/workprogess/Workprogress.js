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
import './Workprogress.css'


const useStyles = makeStyles({
    
    root1: {
      maxWidth: 345,
      background: '#00bfff4f',
      margin:'auto',
    },
    root2: {
        maxWidth: 345,
        background: '#ffb8007d',
        margin:'auto',
      },
    root3: {
        maxWidth: 345,
        background: '#75e86c80',
        margin:'auto',
      },
  });
  
  export default function Workprogress() {
    const classes = useStyles();
  
    return (
        <div className='home' >
        <h1 className="heading">View Work Progress</h1>
        <div className='cards'>
      <Card className={classes.root1}>
        <div className='card'>
        <CardActionArea>
          <img component="img" alt="done" className='cardimg' width='100%' height="140" src={require(`./pending.svg`).default}/>   
          <CardContent>
            <div className='topic'>
            <Typography  gutterBottom variant="h5" component="h2">
                Pending Services
            </Typography>
            </div>
            <div className='par'>
            <Typography variant="body2" color="textSecondary" component="p">
              This Part Will Show The All Pending Services In This System.
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn'>
        <Link className='link' to={`/workprogress/pendingservices`}>
          <Button color="primary" >
            View All
          </Button>
          </Link>
        </CardActions>
        </div>
      </Card>
      <Card className={classes.root2}>
        <div className='card'>
        <CardActionArea>
          <CardMedia component="img" alt="done" height="140" image={require(`./inprogress.svg`).default} title="done"/>
          <CardContent>
            <div className='topic'>
            <Typography  gutterBottom variant="h5" component="h2">
                In Progress Services
            </Typography>
            </div>
            <div className='par'>
            <Typography variant="body2" color="textSecondary" component="p">
                This Part Will Show The All In Progress Services In This System.
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn'>
        <Link className='link' to={`/workprogress/inprogressservices`}>
          <Button color="primary" >
            View All
          </Button>
          </Link>
        </CardActions>
        </div>
      </Card>
      <Card className={classes.root3}>
        <div className='card'>
        <CardActionArea>
        <img component="img" alt="done" className='cardimg' width='100%' height="140" src={require(`./done.svg`).default}/>
          <CardContent>
            <div className='topic'>
            <Typography  gutterBottom variant="h5" component="h2">
                Finish Services
            </Typography>
            </div>
            <div className='par'>
            <Typography variant="body2" color="textSecondary" component="p">
                This Part Will Show The All Finish Services In This System.
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className='btn'>
        <Link className='link' to={`/workprogress/finishservices`}>
          <Button color="primary">
            View All
          </Button>
          </Link>
        </CardActions>
        </div>
      </Card> 
      </div>
      </div>
      
    );
  }
  