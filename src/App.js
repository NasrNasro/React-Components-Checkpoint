
import './App.css';
import Photo from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/FullName';
import Address from './Component/Profile/Adresse';
import Footer from './Component/Profile/Footer';

function App() {
  return (
    <div className="App">
      <Photo />
      <Fullname />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
