import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';

function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <Intro />
            <Services />
            <Experience/>
        </div>
    );
}

export default App;