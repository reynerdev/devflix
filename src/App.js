import Navbar from './components/Navbar';
import './App.sass';
import 'bulma';
import BreadCrumbs from './components/BreadCrumbs';
function App() {
  return (
    <div className="container">
      <Navbar />
      <BreadCrumbs />
    </div>
  );
}

export default App;
