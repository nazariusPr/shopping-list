import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

import { ShoppingCartProvider } from "./context/ShoppingCartContex";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<div>Hello World</div>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
