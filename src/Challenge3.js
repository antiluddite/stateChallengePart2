import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called show
  // Give it an initial value of false


  // TODO: Delete the line below
  const show = "ERROR";

  const toggleShow = () => {
    // TODO: Update the state and toggle showing
    // If show is currently true it should be set to false and vice versa
    // Make sure you account for the asynchronous updating of state!


    // Note: One way to check that you are accounting for
    // asynchronous updates is to set the state two times
    // (you can just copy and paste to get the same line twice).
    // It should toggle once and then back again, so nothing should happen. 
    // If it only toggles once, and you see a change, then it is
    // working off of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <div className="mb-4">
        { (show === "ERROR") ? "ERROR" 
          : (show) ? <p className="bg-success text-white p-2">OH HEY!</p> 
          : <p className="p-2">Nothing to see here.</p> }
      </div>
      <div>
        <button className="btn btn-primary" onClick={toggleShow}>
          Toggle Show
        </button>
      </div>
    </>
  )
}

export default function Challenge3() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 3</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create a piece of state and update it based on the previous state.
      </p>
      <p>
        When it is working correctly, before you click the button it should display:
        Nothing to see here.<br/>
        Every time you click the button it should toggle between "Nothing to see here" 
        and the "OH HEY!" message.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}