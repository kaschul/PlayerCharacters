import { Container } from 'react-bootstrap';
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
          <Container>
            <h1>Character List</h1>
          </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
