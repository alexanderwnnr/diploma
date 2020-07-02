import React from 'react'
import { Link } from 'react-router-dom'
//import { Card, Button } from 'react-bootstrap'
import { makeStyles, Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 320,
    },
    media: {
      height: 240,

    },
  });
  
const ListItem = ({item, onAddedToCart}) => {
    const classes = useStyles();
    const { _id, img, name, date, developer, price} = item

    return (
    <Card 
    // component={Link} 
    // to={`/catalog/:${_id}`} 
    className={classes.root}>
        <CardActionArea>
            <CardMedia
                component={Link}
                to={`/catalog/:${_id}`}
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    {developer}
                </Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
                <Button >
                <Typography variant="h4" component="h3" onClick={onAddedToCart}>
                    {price}
                </Typography>
                </Button>
            </CardActions>
    </Card>
    );
}
export default ListItem



// const ListItem = ({item, onAddedToCart}) => {
//     const { _id, img, name, author, price} = item
//     return(
//         <Card style={{ width: '18rem' }}>
//             <Card.Img style ={{ width: '10rem', height: '10rem'}} variant="top" src={img} />
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>{_id}</Card.Text>
//                 <Card.Text>$ {price}</Card.Text>
//                 <Button variant="primary" onClick={onAddedToCart}>Go somewhere</Button>
//             </Card.Body>
//         </Card>
//     )
// }
// export default ListItem

