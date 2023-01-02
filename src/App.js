import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/Services/Services';

function App() {
    return ( 
        <div className = "App" >

            <Navbar/>
            <Intro />
            <Services/>
        </div>
    );
}

export default App;