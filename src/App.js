import Card from './components/Card/Card';  // <-- For test purpose only
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import image1 from './assets/IMG_20240127_135203237.jpg'  // <-- TEST IMAGE


function App() {
  const dataObj = { image: image1, likes: '100', title: 'This is me' };
  return (
    <>
      <Navbar searchData={""} />
      <Hero />
      <Card data={dataObj} type='song'/>  {/*<-- For test purpose only*/}
    </>
  );
}

export default App;
