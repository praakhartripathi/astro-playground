import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import FestivalBanner from './components/FestivalBanner';
import Features from './components/Features';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <FestivalBanner />
      <Features />
      <main>
        {/* Page content will go here */}
      </main>
    </>
  );
}

export default App;
