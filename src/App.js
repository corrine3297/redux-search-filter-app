import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/view/:id' element={<ViewProduct />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
