import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Footer from "./components/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;