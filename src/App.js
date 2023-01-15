import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PortfolioUpdated from './components/PortfolioUpdated/PortfolioUpdated';


function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <Intro />
            <Services />
            <Experience />
            <Work />
            <PortfolioUpdated />
            {/* <Portfolio /> */}
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;