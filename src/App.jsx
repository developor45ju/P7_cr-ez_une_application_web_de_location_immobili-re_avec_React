import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Accommodation from '../pages/Accommodation.jsx';
import About from '../pages/About.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx';

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