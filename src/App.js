import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import './main.css';
import {useState} from "react";
import {ConfigProvider, theme, Button} from "antd";

function App() {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        setIsDarkMode((previousValue) => !previousValue);
    };

    return (
        <>
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
                <h1>Collection</h1>
                <Routes>
                    <Route index path="/" element={<Home/>}/>
                </Routes>
            </ConfigProvider>
        </>
    );
}

export default App;
