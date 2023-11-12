import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Navigation from "./components/Navigation/Navigation";
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;