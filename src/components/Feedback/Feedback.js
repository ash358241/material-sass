import React from 'react';
import './Feedback.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      padding: '30px',
      marginBottom: '20px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const Feedback = () => {

    const classes = useStyles();
  
    return (
        <div className="feedBack">
            <div className="feedbackContainer">
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    S
                </Avatar>
                }
                title="Sarah Andrews"
                subheader="$100k in revenue"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea corrupti magnam eligendi odit molestias unde optio reiciendis, consectetur at amet animi laudantium, fugiat quos et atque nobis dolorem eius!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton style={{color: 'crimson'}} aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton style={{color: 'deepSkyBlue'}} aria-label="share">
                <ShareIcon />
                </IconButton>
                <Box marginLeft='auto'>
                <Button variant='contained' color="secondary">
                    View Portfolio
                </Button>
                </Box>
            </CardActions>
            </Card>
                
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    M
                </Avatar>
                }
                title="Mathew Higgins"
                subheader="$20k in revenue"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid iusto dolores sequi numquam laborum perspiciatis vel laboriosam magni ipsam, eius cumque consequuntur molestiae explicabo libero cupiditate porro perferendis inventore.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton style={{color: 'crimson'}} aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton style={{color: 'deepSkyBlue'}} aria-label="share">
                <ShareIcon />
                </IconButton>
                <Box marginLeft='auto'>
                <Button variant='contained' color="secondary">
                    View Portfolio
                </Button>
                </Box>
            </CardActions>
            </Card>

            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    J
                </Avatar>
                }
                title="Janice Dave"
                subheader="$30k in revenue"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod quidem suscipit illo vel expedita, dolore ipsam! Ullam modi iusto eius soluta corporis animi explicabo, at, obcaecati maxime tenetur error?
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton style={{color: 'crimson'}} aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton style={{color: 'deepSkyBlue'}} aria-label="share">
                <ShareIcon />
                </IconButton>
                <Box marginLeft='auto'>
                <Button variant='contained' color="secondary">
                    View Portfolio
                </Button>
                </Box>
            </CardActions>
            </Card>
            </div>
        </div>
    );
};

export default Feedback;