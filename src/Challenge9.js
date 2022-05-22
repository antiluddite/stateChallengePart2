import { useState } from "react";
import { v4 as uuid } from "uuid";

const EMOJI_OPTIONS = ['😁', '🙂', '😐', '😟', '😭']

function AddMoodLogForm({ onSubmit }) {
  // TODO: Make some state to keep track of the in-progress form data
  // Note: Emojis are just strings, so the initial value for the emoji
  // can be an empty string, but null or undefined will work as well


  // TODO: Make event handler function(s) for when form inputs are changed
  // Note: The one for the emoji will need to work a little differently
  // because it won't be given an event parameter, it will be called
  // by the EmojiPicker component with the emoji that was picked


  const onAddButtonClick = (event) => {
    // Leave this line so the page doesn't reload
    event.preventDefault();

    // TODO: Give the form data to the addToMoodLogList function
    // that was passed through the onSubmit prop


    // TODO: Clear the form

  }

  // TODO: Connect each form input to the state
  // (both the custom EmojiPicker form input and the regular input)
  // Hint: check what props the EmojiPicker component is expecting
  return (
    <form>
      <h5>Add Mood</h5>
      <EmojiPicker/>
      <input 
        type="text" 
        id="type-input"
        placeholder="Message" 
        className="form-control"
      />
      <button 
        onClick={onAddButtonClick}
        className="btn btn-primary mt-3">
        Add
      </button>
    </form>
  )
}

function PracticeComponent() {
  const [moodLogList, setMoodLogList] = useState([
    {
      id: '81647b12-ed7b-46d5-88ce-a7665b2b924b',
      emoji: '😁',
      message: 'Ate cake!'
    }
  ]);

  const addToMoodLogList = (newLogData) => {
    // The next ID to use
    const nextLogId = uuid();

    // TODO: Add a new game to the game list that has the data
    // from newGameData and an id set to nextGameId
    // Don't edit the parameter directly, work off a copy
    
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
    <h5>Mood Log</h5>
      <ul className="list-unstyled">
        { moodLogList.map(moodLog => (
          <li key={moodLog.id}>
            { moodLog.emoji } { moodLog.message }
          </li>
        ))}
      </ul>
      <AddMoodLogForm onSubmit={addToMoodLogList}/>
    </>
  )
}

// A custom input that allows a user to select an emoji
// It's "stupid", it doesn't keep track of its own state.
// The form needs to keep track of which emoji is selected
// and tell the emoji picker which one is selected 
// through the value prop
function EmojiPicker({ value, onChange }) {
  const btnClasses = "p-1 border border-5 rounded-circle ";
  return (
    <div className="d-flex fs-1 mb-3">
      { EMOJI_OPTIONS.map(emoji => (
        <button
          type="button" 
          key={emoji}
          className={btnClasses + (value === emoji ? "border-primary" : "border-light")}
          onClick={() => onChange(emoji)}>
          { emoji }
        </button>
      ))}
    </div>
  )
}

export default function Challenge9() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 9</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Hook up a form with a custom input.
      </p>
      <p>
        When it is working correctly, the user should be
        able to select an emoji, type a message into the
        textbox, then click the Add button and the
        new Mood Log item should show up in the Mood Log
        with the emoji and the message
      </p>
      <p>
        Make sure you do not set state directly.
      </p>
    </div>
  )
}