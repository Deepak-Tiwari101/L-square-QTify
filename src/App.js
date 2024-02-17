import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar searchData={""} />
      <Hero />
    </>
  );
}

export default App;
