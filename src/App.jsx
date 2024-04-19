import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/';
import Accommodation from './pages/Accommodation/';
import About from './pages/About/'
import NotFoundPage from './pages/404/';
import Header from './components/Header';
import Footer from './components/Footer';

const navItems = [
    {
    name: 'Home',
    path: '/'
}, 
    {
    name: 'About',
    path: '/about'
}];
const logoSite = process.env.PUBLIC_URL + '/images/logo.png';
const nameSite = 'Kasa';

const App = () => {
    return (
        <Router>
            <Header nav={navItems} logo={logoSite} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/accommodation/:id' element={<Accommodation />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer logo={logoSite} name={nameSite} />
        </Router>
    )
}

export default App;