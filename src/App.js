import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'

function App() {
  return (
    <Router> 
    <Navbar />
          <Container> 
            <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Projects" element={<Projects/>}/>
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>  
            <Route path= "/Project/:id" element={<Project/>}/>      
          </Routes>
        </Container>
      <Footer />

    </Router>
    );
}
export default App
