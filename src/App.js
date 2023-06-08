import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import './main.css';

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
