import React, { useContext, useEffect } from 'react'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import Redeems from './components/Redeems/Redeems'
import { ProductProvider } from './context/ProductContext'
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <ProductProvider>
        <Header />  
        <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/redeems" component={Redeems} />
            {/* <Route path="/getcoins" component={GetCoins} /> */}
        </Switch>
        {/* <MainContainer /> */}
      </ProductProvider>
    </Router>
  );
}

export default App;
