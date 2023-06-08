import {Link, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './pages/Home';
import './main.css';
import React, {useState} from "react";
import {ConfigProvider, theme, Button} from "antd";

function App() {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [darkModeClass, setDarkModeClass] = useState('');

    const handleClick = () => {
        setIsDarkMode((previousValue) => !previousValue);
        setDarkModeClass(previousClass => (previousClass === '' ? 'dark-mode' : ''));
    };

    return (
        <div className={darkModeClass} style={{padding:"20px", height:"100vh"}}>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}>
                <Button onClick={handleClick}>
                    Change Theme to {isDarkMode ? "Light" : "Dark"}
                </Button>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={`https://siljeangelvik.netlify.app/`}>Old Portfolio</Link>
                        </li>
                    </ul>
                </nav>
                <Contact/>
                <h1>Collection</h1>
                <Routes>
                    <Route index path="/" element={<Home/>}/>
                </Routes>
            </ConfigProvider>
        </div>
    );
}

export default App;
