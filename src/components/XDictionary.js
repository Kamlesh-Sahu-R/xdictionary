import React, { useState } from "react";


export default function XDictionary() {

  // Initialize the dictionary state with sample words and their meanings
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for user input and the result
  const [searchWord, setSearchWord] = useState('');
  const [definition, setDefinition] = useState(null);

  // Search function
  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchWord.toLowerCase());
    
    if (foundWord) {
      setDefinition(foundWord.meaning);  // Show the meaning if word found
    } else {
      setDefinition("Word not found in the dictionary.");  // Show not found message
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="Search for a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {definition && 
          <div>
            <h3>Definition:{" "}</h3> 
            <p>{definition}</p>
          </div>
        }
      </div>
    </div>
  );
}


