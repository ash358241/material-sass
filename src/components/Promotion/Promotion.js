import React from 'react';
import './Promotion.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import CodeIcon from '@material-ui/icons/Code';
import DevicesIcon from '@material-ui/icons/Devices';
import promoImg from '../../images/Page Image.png';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border: 'none',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    btn: {
        padding: '20px',
    },
  });

const Promotion = () => {

    const classes = useStyles();
    return (
        <div className="promotion">
            <div className="promotionHeading">
                <h4>Why Fiber?</h4>
                <h2>A good portfolio means a good employability.</h2>
            </div>

            <div className="promotionContent">
            <Card className={classes.root} variant="outlined">
        <CardContent>
            <AvTimerIcon></AvTimerIcon>
            <Typography variant="p" component="h4">
            Build in minute
            </Typography>
            <br />
            <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam magnam inventore, iure dolore laborum!
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        </Card>

        <Card className={classes.root} variant="outlined">
        <CardContent>
        <CodeIcon></CodeIcon>
            <Typography variant="p" component="h4">
            Add custom CSS
            </Typography>
            <br />
            <Typography variant="body2" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non inventore temporibus id quaerat, exercitationem sed?
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        </Card>

        <Card className={classes.root} variant="outlined">
        <CardContent>
            <DevicesIcon></DevicesIcon>
            <Typography variant="p" component="h4">
            Responsive
            </Typography>
            <br />
            <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum a maxime, aliquam fugit animi!
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        </Card>
        </div>
        <br />
        <div className="promotionTrial">
            <div className="promoText">
                <h1>Diversify your portfolio</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam iure, dolore ad maiores facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, culpa.</p>
                <Button className={classes.btn} variant="contained" color="primary">
                    Start Free Trial
                </Button>
            </div>
            <div className="promoImg">
                <img src={promoImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Promotion;