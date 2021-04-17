import React, { useContext, useEffect } from 'react'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import { ProductProvider } from './context/ProductContext'

function App() {
  

  return (
    <ProductProvider>
      <Header />  
      <MainContainer />
    </ProductProvider>
  );
}

export default App;
