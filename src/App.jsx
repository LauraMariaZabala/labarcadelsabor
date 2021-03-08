import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Item from './components/Item';
import ShoppingCart from './components/ShoppingCart';
import data from './data/data';
import './styles/App.css';
import burguerImg from './assets/burguer.png';
import salvajadaImg from './assets/salvajada.jpg';
import dogImg from './assets/dog.jpeg';





const App = () => {
  const {PRODUCTS} = data; 
  const [category, setCategory] = useState("Hamburguesa");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);   // Lleva los productos al carrito

  const selectCategory = (cat) => {
    setCategory(cat);
  }

  const onSetShowCart = (show) => {
    setShowCart(show);
  }

  const onAddToCart = (item) => {
    const exist = cartItems.find(p => p.id ===  item.id);

    if (exist) {
      setCartItems(cartItems.map(p =>p.id === item.id ?
        {...exist, qty: exist.qty +1} : p))
    } else {
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  }

  const onRemoveFromCart = (item) => {
    const exist = cartItems.find(p => p.id === item.id);

    if (exist){  
        if (exist.qty === 1) {
          setCartItems(cartItems.filter(p => p.id  !== item.id));
        } else {
          setCartItems(cartItems.map(p => p.id === item.id ?
            {...exist, qty: exist.qty -1} : p));
        }
    }    
  }

  const searchProductInCart = (product) => {
    const exist = cartItems.find(i => i.id === product.id);

    if (exist) {
      return exist.qty
    }

    return 0;
  }

  const getCategoryImage = (category) => { 
    switch (category) {
      case "Hamburguesa":
        return <img className={"category-picture img-" + category} alt={category} src={burguerImg} />
      case "Salvajada":
        return <img className={"category-picture img-" + category} alt={category} src={salvajadaImg} />
      case "Perros":
        return <img className={"category-picture img-" + category} alt={category} src={dogImg} />
      default:
        return null;
    }
  }

  let products = PRODUCTS
    .filter((product) => category === "" || category === product.category)
    .map((product) =>
      <Item key={product.id.toString()}
            product={product} 
            name={product.name}
            price={product.price}
            ingredients={product.ingredients}
            category={product.category}
            quantity={searchProductInCart(product)} 
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}/>
    );

  return (
    <div className="app-container">
      <Header/>
      <Nav category={category} onSelectCategory={selectCategory} />
      <div className="container-products">
        {getCategoryImage(category)}
        {products}
      </div>
      <ShoppingCart cartItems={cartItems}
        showCart={showCart}
        onSetShowCart={onSetShowCart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}/>
      <Footer onSetShowCart={onSetShowCart}/>
    </div>
  )
}

export default App;
