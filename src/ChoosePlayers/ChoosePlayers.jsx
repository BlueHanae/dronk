import React, { useState } from 'react';
import GameStart from '../GameStart/GameStart';


function ChooseNumber() {
    const [players, setPlayers] = useState([{ name: '' }, { name: '' }, { name: '' }, { name: '' }]);
    const [nextStep, setNextStep] = useState(false)

    function handlePlayerNameChange(index, name) {
      setPlayers(prevPlayers => {
        const newPlayers = [...prevPlayers];
        newPlayers[index] = { name };
        return newPlayers;
      });
    }
  
    function handleNextStep(){
        if ((players[0].name.length > 0) && (players[1].name.length > 0) && (players[2].name.length > 0) && (players[3].name.length > 0)){
            setNextStep(true)
        } else {
            console.error("Conditions non remplies");
        }
    }

    function handleAddPlayer() {
      if (players.length < 10) {
        setPlayers(prevPlayers => [...prevPlayers, { name: '' }]);
      }
    }
  
    function handleRemovePlayer() {
      if (players.length > 4) {
        setPlayers(prevPlayers => prevPlayers.slice(0, -1));
      }
    }
  
    return (
      <div>
      {nextStep ? (
        <GameStart players={players}/>
      ): (
      <div className='ChoosePlayer'>
        {players.map((player, index) => (
          <div key={index}>
            <input
              type="text"
              value={player.name}
              onChange={event => handlePlayerNameChange(index, event.target.value)}
              maxLength={10} // limit the name length to 10 characters
            />
          </div>
        ))}
        <button onClick={handleAddPlayer} disabled={players.length === 10}>Ajouter un joueur</button>
        <button onClick={handleRemovePlayer} disabled={players.length === 4}>Enlever un joueur</button>
        <button onClick={handleNextStep}>C'est parti!</button>
      </div>
      )}
      </div>
    );

    // return (
    //     <div className='ChooseNumber'>
    //         {nextStep ? (
    //         <PlayerNames players={players}/>
    //     ) : (
    //         <div>
    //             <label>
    //                 Combien de joueurs êtes vous?
    //             </label>
    //             <input type="text" min="3" max="10" value={names[0]} onChange={event => handleChange(0, event.target.value)} placeholder='Joueur 1'/>
    //             <input type="text" min="3" max="10" value={names[1]} onChange={event => handleChange(1, event.target.value)} placeholder='Joueur 2'/>
    //             <input type="text" min="3" max="10" value={names[2]} onChange={event => handleChange(2, event.target.value)} placeholder='Joueur 3'/>
    //             <input type="text" min="3" max="10" value={names[3]} onChange={event => handleChange(3, event.target.value)} placeholder='Joueur 4'/>
    //             <button onSubmit={handleSubmit}>Valider</button>
    //             <button></button>
    //             </div>
    //         )}
    //     </div>
    // );
}

export default ChooseNumber;