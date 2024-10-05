import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Partner';
import Cities from './components/Cities';
import Offer from './components/Offer';
import DFA from './components/DFA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Alert from './components/Alert'; // Importing the new Alert component
import styles from './style';

const App = () => {
  return (
    <div className="relative">
      <Alert /> {/* Disclaimer Alert */}
      <Navbar />
      <Hero />
      <Work />
      <Cities />
      <Offer />
      <DFA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
