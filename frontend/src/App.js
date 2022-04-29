import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen.js'
import CharacterListScreen from './screens/CharacterListScreen.js'
import CharacterScreen from './screens/CharacterScreen.js'
import NpcListScreen from './screens/NpcListScreen.js'
import NpcScreen from './screens/NpcScreen.js'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/characters' element={<CharacterListScreen />} />
            <Route path='/character/:id' element={<CharacterScreen />} />
            <Route path='/npcs' element={<NpcListScreen />} />
            <Route path='/npc/:id' element={<NpcScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/order' element={<OrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
