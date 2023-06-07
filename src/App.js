import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <h1>App</h1>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
