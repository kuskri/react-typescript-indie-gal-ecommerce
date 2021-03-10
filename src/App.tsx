import React, { useState, useEffect } from "react"
import { data } from "./DATA"
import ScrollToTop from "./ScrollToTop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { theme } from "./theme/theme"
//COMPONENTS
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"
import NewsletterSignUp from "./components/NewsletterSignUp"
//PAGES
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import OurEthics from "./pages/OurEthics"
import MyAccount from "./pages/MyAccount"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Brand from "./pages/Brand"
import Category from "./pages/Category"
import ShoppingCart from "./pages/ShoppingCart"
//TYPES
import { ProductObj, CartItemObject } from "./types"

const cartItemsFromLocalStorage = JSON.parse(
  localStorage.getItem("cart") || "[]"
)

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage)

  //adding products to cart. if the prod id already exist in cart, then augmenting only quantity
  const onAdd = (product: ProductObj) => {
    const alreadyInCart: CartItemObject = cartItems.find(
      (prevProduct: ProductObj) => prevProduct._id === product._id
    )
    if (alreadyInCart) {
      setCartItems(
        cartItems.map((prevProduct: ProductObj) =>
          prevProduct._id === product._id
            ? { ...alreadyInCart, qty: alreadyInCart.qty + 1 }
            : prevProduct
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  //removing products from cart
  const onRemove = (product: ProductObj) => {
    const existsInCart = cartItems.find(
      (prevProduct: ProductObj) => prevProduct._id === product._id
    )
    if (existsInCart.qty === 1) {
      setCartItems(
        cartItems.filter(
          (prevProduct: ProductObj) => prevProduct._id !== product._id
        )
      )
    } else {
      setCartItems(
        cartItems.map((prevProduct: ProductObj) =>
          prevProduct._id === product._id
            ? { ...existsInCart, qty: existsInCart.qty - 1 }
            : prevProduct
        )
      )
    }
  }

  //deleting items from cart
  const onDelete = (product: ProductObj) => {
    const existsInCart = cartItems.find(
      (prevProduct: ProductObj) => prevProduct._id === product._id
    )
    if (existsInCart) {
      setCartItems(
        cartItems.filter(
          (prevProduct: ProductObj) => prevProduct._id !== product._id
        )
      )
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  //gets back the total cartItems qty
  const getTotalCartItems: number = cartItems.reduce(
    (acumulator: number, currentItem: CartItemObject) =>
      acumulator + currentItem.qty,
    0
  )

  return (
    <Router>
      <ScrollToTop />
      <ChakraProvider theme={theme}>
        <Box textAlign="center">
          <NavBar countCartItems={getTotalCartItems} />
          <Switch>
            <Route path="/products/:id">
              <ProductDetails products={products} onAdd={onAdd} />
            </Route>
            <Route path="/category/:category">
              <Category products={products} onAdd={onAdd} />
            </Route>
            <Route path="/brand/:brand" exact>
              <Brand products={products} onAdd={onAdd} />
            </Route>
            <Route path="/products" exact>
              <Products products={products} onAdd={onAdd} />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
              />
            </Route>
            <Route path="/my-account">
              <MyAccount />
            </Route>
            <Route path="/our-ethics">
              <OurEthics />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <NewsletterSignUp />
          <Footer />
          <Copyright />
        </Box>
      </ChakraProvider>
    </Router>
  )
}
export default App
