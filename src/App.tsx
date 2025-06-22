import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header /> {/* <-- Adicione o Header aqui */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
