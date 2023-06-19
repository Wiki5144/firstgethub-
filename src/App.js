import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header} from './components/header';
import { Head } from './components/head';
import Menu from './components/home';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>

          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/' element={<Head/>}></Route>
      </Routes>
      </BrowserRouter>
      <h1>Footer</h1>

    </div>
  );
}

export default App;
