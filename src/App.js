import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/Intro';

function App() {
    return ( 
        <div className = "App" >

            <Navbar></Navbar>
            <Intro></Intro>
        </div>
    );
}

export default App;