
import './App.css';
import { Navbar } from './Navbar';
import { TitleBar, FooterBar } from './TitleBar';
import { useState } from 'react';
import { Products } from './Products';


function App() {
  const [state, setState] = useState(0);
  const products=[
    {
      name:"Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "40.00 -$80.00"
    },
    {
      name:"Special Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"18.00"
    },
    {
      name:"Sale Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"25.00"
    },
    {
      name:"Popular Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"40.00"
    },
    {
      name:"Sale Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"25.00"
    },
    {
      name:"Fancy Product",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"120.00-$280.00"
    },
    {
      name:"Special Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"18.00"
    },
    {
      name:"Popular Item",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price:"40.00"
    },
  ];
  return (
    <div className="App">
      <Navbar state={state}/>
      <TitleBar />
      <div className="product-Container">
        {products.map(({name,image,price}) => (<Products 
        name={name}
        image={image}
        price={price}
        state= {state}
        setState= {setState}
        />
        ))}
      </div>
      <FooterBar />
    </div>
  )
}

export default App;
