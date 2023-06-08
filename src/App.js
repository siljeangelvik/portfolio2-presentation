import { Content } from 'antd/lib/layout/layout';
import { Link, Route, Routes } from 'react-router-dom';
import useToggle from './hooks/useToggle';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './pages/Home';
import './main.css';
import React  from "react";
import { ConfigProvider, theme } from "antd";

function App() {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, toggleDarkMode] = useToggle(false);
    const darkModeClass = isDarkMode ? 'dark-mode' : '';

    const handleClick = () => {
        toggleDarkMode();
    };

    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}
            >
                <div className={darkModeClass} style={{ minHeight: "100vh" }}>
                    <NavBar handleClick={handleClick} isDarkMode={isDarkMode} />
                    <Content style={{ padding: "20px" }}>
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
                        <Contact />
                        <h1>Collection</h1>
                        <Routes>
                            <Route index path="/" element={<Home />} />
                        </Routes>
                    </Content>
                </div>
            </ConfigProvider>
        </>
    );
}

export default App;