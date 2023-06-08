import {Content} from 'antd/lib/layout/layout';
import {Route, Routes} from 'react-router-dom';
import About from './pages/About';
import useToggle from './hooks/useToggle';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './main.css';
import React from "react";
import {ConfigProvider, theme} from "antd";

function App() {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, setIsDarkMode] = useToggle(false);
    const darkModeClass = isDarkMode ? 'dark-mode' : '';

    const handleClick = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}
            >
                <div className={darkModeClass} style={{minHeight: "100vh"}}>
                    <NavBar handleClick={handleClick} isDarkMode={isDarkMode}/>
                    <Content style={{padding: "20px"}}>
                        <Routes>
                            <Route index path="/" element={<Home isDarkMode={darkModeClass}/>}/>
                            <Route index path="/about" element={<About/>}/>
                        </Routes>
                    </Content>
                </div>
            </ConfigProvider>
        </>
    );
}

export default App;