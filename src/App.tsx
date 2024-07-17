import './App.css';
import { Header } from './assets/layout/header/Header';
import {Main} from "./assets/layout/section/main/Main";
import {About} from "./assets/layout/section/about/About";
import {Service} from "./assets/layout/section/service/Service";
import {Projects} from "./assets/layout/section/projects/Projects";
import {Contact} from "./assets/layout/section/contact/Contact";
import {Footer} from "./assets/layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About/>
            <Service/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

