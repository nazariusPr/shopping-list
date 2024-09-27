import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import { Container } from "react-bootstrap";

import { ShoppingCartProvider } from "./context/ShoppingCartContex";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
