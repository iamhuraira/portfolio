import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <Intro />
            <Services />
            <Experience />
            <Work />
            <Portfolio/>
        </div>
    );
}

export default App;