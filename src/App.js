
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Layouts from './components/Layouts';
=======
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
>>>>>>> 3fdcf9e33a5428e9add8a417d88f9fa09e38d8de

function App() {
  return (
    <div className="wrapper">
<<<<<<< HEAD
      {/* <Header />
      <SideMenu />
      <Dashboard />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="header" element={<Header />}></Route>
          <Route path="menu" element={<SideMenu />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="footer" element={<Footer />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<MainHomePage />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="exprience" element={<Exprience />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
=======
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
>>>>>>> 3fdcf9e33a5428e9add8a417d88f9fa09e38d8de
    </div>
  );
}

export default App;
