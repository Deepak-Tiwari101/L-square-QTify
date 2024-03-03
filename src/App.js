import TopAlbum from './components/Album/TopAlbum';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

export const config = {
  endpoint: 'https://qtify-backend-labs.crio.do',
  albumType: 'album',
  songType: 'song'
};


function App() {

  return (
    <>
      <Navbar searchData={""} />
      <Hero />
      <TopAlbum />  {/* <-- for test only */}
    </>
  );
}

export default App;
