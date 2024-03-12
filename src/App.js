import Album from './components/Album/Album';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Song from './components/Song/Song';

export const config = {
  endpoint: 'https://qtify-backend-labs.crio.do',
  albumType: 'album',
  songType: 'song',
  genre: {
    ALL_GENRE: {
      index: 0,
      key: "",
    },
    ROCK_GENRE: {
      index: 1,
      key: "rock",
    },
    POP_GENRE: {
      index: 2,
      key: "pop",
    },
    JAZZ_GENRE: {
      index: 3,
      key: "jazz",
    },
    BLUES_GENRE: {
      index: 4,
      key: "blues",
    },
  },
  getGenreKeyByIndex: function (index) {
    for (const genreKey in this.genre) {
      if (this.genre.hasOwnProperty(genreKey)) {
        if (this.genre[genreKey].index === index) {
          return this.genre[genreKey].key;
        }
      }
    }
    return null;
  }
};


function App() {

  return (
    <>
      <Navbar searchData={""} />
      <Hero />
      <Album />
      <Song />
    </>
  );
}

export default App;
