import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called color
  // Give it an initial value of "black"

  // TODO: Delete the line below
  const color = "red"

  const setColorToBlue = () => {
    // TODO: Update the state and set the color to "blue"
    
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <div className="mb-4">
        The color is:
        <span className="text-white p-2 ms-2" style={{ backgroundColor: color }}>
          {color}
        </span>.
      </div>
      <div>
        <button className="btn btn-primary" onClick={setColorToBlue}>
          Set color to blue
        </button>
      </div>
    </>
  )
}

export default function Challenge2() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 2</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create a piece of state and update it.
      </p>
      <p>
        When it is working correctly you should see that the color is black
        before the button is clicked and blue after the button is clicked.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}