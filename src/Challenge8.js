import { useState } from "react";

function AddGameForm({ onSubmit }) {
  // TODO: Make some state to keep track of the in-progress form data
  
  // TODO: Make event handler function(s) for when form inputs are changed
  

  const onAddButtonClick = (event) => {
    // Leave this line so the page doesn't reload
    event.preventDefault();

    // TODO: Give the form data to the addToGameList function
    // that was passed through the onSubmit prop
    

    // TODO: Clear the form
    
  }

  // TODO: Connect each form input to the state
  // Hint - each input needs two things
  return (
    <form>
      <h5>Add Game</h5>
      <label 
        htmlFor="name-input" 
        className="form-label">
        Name:
      </label>
      <input 
        type="text" 
        id="name-input" 
        className="form-control"
      />
      <label 
        htmlFor="type-input" 
        className="form-label">
        Type:
      </label>
      <input 
        type="text" 
        id="type-input" 
        className="form-control"
      />
      <button 
        onClick={onAddButtonClick}
        className="btn btn-primary mt-2">
        Add
      </button>
    </form>
  )
}

function PracticeComponent() {
  const [gameList, setGameList] = useState([
    {
      id: 0,
      name: "Scum",
      type: "Card Game"
    }
  ]);

  const addToGameList = (newGameData) => {
    // Little helper line of code to get the next id
    const nextGameId = gameList[gameList.length - 1].id + 1;

    // TODO: Add a new game to the game list that has the data
    // from newGameData and an id set to nextGameId
    // Don't edit the parameter directly, work off a copy
    
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
    <h5>Games</h5>
      <ul>
        { gameList.map(game => (
          <li key={game.id}>{ game.name } ({ game.type })</li>
        ))}
      </ul>
      <AddGameForm onSubmit={addToGameList}/>
    </>
  )
}

export default function Challenge7() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 7</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Hook up a form to add an item to a list.
      </p>
      <p>
        When it is working correctly, the Add Game form
        should add a game to the list. After the Add button
        is clicked the form should be cleared.
      </p>
      <p>
        Make sure you do not set state directly!
      </p>
    </div>
  )
}