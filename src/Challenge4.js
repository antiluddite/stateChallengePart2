import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called total
  // Give it an initial value of 0


  // TODO: Delete the line below
  const total = "ERROR";

  const addToTotal = (price) => {
    // TODO: Update the state and add the price to the total
    // Make sure you account for the asynchronous updating of state!
    

    // Note: One way to check that you are accounting for
    // asynchronous updates is to set the state two times
    // (you can just copy and paste to get the same line twice).
    // It should add the price to the total twice. 
    // If it only adds it once then it is working off
    // of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <div className="mb-4">
        Total: ${total}
      </div>
      <div>
        <button className="btn btn-primary mb-3" onClick={() => addToTotal(15)}>
          Add $15 Shirt to Cart
        </button><br/>
        <button className="btn btn-primary" onClick={() => addToTotal(20)}>
          Add $20 Pants to Cart
        </button>
      </div>
    </>
  )
}

export default function Challenge4() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 4</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create a piece of state and update it based on the previous state.
      </p>
      <p>
        When it is working correctly, the total should start at zero,
        and the buttons should add 15 or 20 to the total every time
        they are clicked.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}