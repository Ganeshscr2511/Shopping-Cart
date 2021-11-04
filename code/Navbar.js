import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import { useState } from 'react';




export function Navbar({state}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" color='transparent'>
      <div className="navBar">
        <div>
          <ul className="navBar-List">
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
            <p
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}

            >
              Shop
            </p>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>All Products</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Popular Item</MenuItem>
              <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
            </Menu>
            </li>
          </ul>
          
        </div>
        <div>
          <Button variant="outlined" color='inherit' startIcon={<ShoppingCartIcon />}>
            Cart <p className="cartCount">{state}</p>
          </Button>
        </div>
      </div>
    </AppBar>
  );
}


// className={classes.customWidth}