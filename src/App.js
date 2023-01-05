import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <Intro />
            <Services />
            <Experience />
            <Work />
            <Portfolio />
            <Testimonials/>
        </div>
    );
}

export default App;