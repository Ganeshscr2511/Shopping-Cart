import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function Products(props) {
  const [text, setText] = useState(true);
  const styles = { fontWeight: "400" };
  return (
    <div className="product-items">
      <Card sx={{ textAlign: 'center', boxShadow: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }} component="div" ClassName="productName">
              {props.name}
            </Typography>
            {+props.price <= 20.00 || +props.price === 40.00 ? "🌟🌟🌟🌟🌟" : ""}

            <h3 style={styles}>${props.price}</h3>
          </CardContent>
        </CardActionArea>
        {text ?
          <Button ClassName="AddBtn" color='inherit' variant="outlined" onClick={() => {
            props.setState(props.state + 1);
            setText(false);
          }}>
            Add to Cart
          </Button>
          :
          <Button ClassName="AddBtn" color='inherit' variant="outlined" onClick={() => {
            props.setState(props.state ? props.state - 1 : 0);
            setText(true);
          }}>
            Remove Item
          </Button>}
      </Card>
    </div>

  );
}
