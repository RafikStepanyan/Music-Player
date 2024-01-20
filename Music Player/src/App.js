import { createContext, useState } from 'react';
import { Layout } from './components/Layout';

export const MyContext = createContext();

function App() {
  const [songArray, setSongArray] = useState([
    {
      song_name: 'In the end',
      artist_name: 'Linkin Park',
      track_number: 1,
      file: 'In the end - Linkin Park.mp3'
    },
    {
      song_name: 'Already over',
      artist_name: 'Red',
      track_number: 2,
      file: 'Already over - Red.mp3'
    },
    {
      song_name: 'Lion',
      artist_name: 'Hollywood undead',
      track_number: 3,
      file: 'Lion - Hollywood undead.mp3'
    },
    {
      song_name: 'Comatose',
      artist_name: 'Skillet',
      track_number: 4,
      file: 'Comatose - Skillet.mp3'
    },
    {
      song_name: 'Without you',
      artist_name: 'Breaking Benjamin',
      track_number: 5,
      file: 'Without you - Breaking Benjamin.mp3'
    },
  ]);
  
  return (
    <>
      <MyContext.Provider value={{ songArray, setSongArray }}>
        <Layout />
      </MyContext.Provider>
    </>
  );
}

export default App;
