import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import NpcListScreen from './screens/NpcListScreen';
import NpcCharacterScreen from './screens/NpcCharacterScreen';

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/character/:id' element={<CharacterScreen />} />
              <Route path='/npcs' element={<NpcListScreen />} />
              <Route path='/npc/:id' element={<NpcCharacterScreen />} />
            </Routes>
          </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
