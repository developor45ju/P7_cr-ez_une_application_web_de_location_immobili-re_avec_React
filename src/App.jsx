import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/';
import Accommodation from './pages/Accommodation/';
import About from './pages/About/'
import NotFoundPage from './pages/404/';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/accommodation/:id' element={<Accommodation />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default App;