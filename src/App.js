
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [character, setCharacter] = useState('');
  const [items, setItems] = useState([]);
  const [value, setValue] = useState({});

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    apiFetch();
  }, []);

  useEffect(() => {
    showUpCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character]);

  const apiFetch = async () => {
    setLoading(true);
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const res = await api.json();
    setLoading(false);
    setItems(res.results);

  };

  const showUpCharacter = async () => {
    if (value !== '') {
      setLoading(true);
      const api = await fetch(
        `https://rickandmortyapi.com/api/character/${character}`
      );
      const res = await api.json();
      setLoading(false);
      setValue(res);
    }
  };

  return (
    <div className='cardContainer'>
      <h2>Rick and Morty App</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select
          value={character}
          onChange={(e) => setCharacter(e.target.value)}>
          <option value=''>- Select character -</option>
          {items.map((character) => (
            <option value={character.id} key={character.id}>
              {character.name}
            </option>
          ))}
        </select>
      )}
      <div>
        {value?.name ? (
          <div className='targetContainer'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <img
                  src={value.image}
                  alt={value.name}
                />
                <div className='targetText'>
                  <h3>{value.name}</h3>
                  <p>
                    Species: <b>{value.species}</b>
                  </p>
                  <p>
                    Status: <b>{value.status}</b>
                  </p>
                </div>
              </>
            )}
          </div>
        ) : (
          <p>Seleccione un personaje</p>
        )}
      </div>
    </div>
  );
};

export default App;