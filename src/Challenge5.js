import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called colorList
  // Give it an initial value of an empty array
  

  // Note: When you get everything working you may get a 
  // console error about keys if you add the same color multiple times. 
  // Just ignore the error :)

  // TODO: Delete the line below
  const colorList = ["red"];

  const addToColorList = (color) => {
    // TODO: Update the state and add the passed in color to the list
    // Make sure you account for the asynchronous updating of state!
    

    // Note: One way to check that you are accounting for
    // asynchronous updates is to set the state two times
    // (you can just copy and paste to get the same line twice).
    // It should add the color to the list twice
    // If it only adds it once then it is working off
    // of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <div>
        <button className="btn btn-primary mb-3" 
          onClick={() => addToColorList("goldenrod")}>
          Add goldenrod
        </button><br/>
        <button className="btn btn-primary" 
          onClick={() => addToColorList("darkolivegreen")}>
          Add darkolivegreen
        </button>
      </div>
      <div className="my-4">
        Colors:
        <div className="text-white text-center mt-3" style={{ width: "150px" }}>
          { colorList.map(color => (
            <div 
              key={color}
              className="p-2" 
              style={{ backgroundColor: color }}>
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function Challenge5() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 5</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create an array piece of state and update the state to 
        add items to the array.
      </p>
      <p>
        When it is working correctly, there should be nothing
        showing initially. Every time you click one of the
        buttons it should add a color to the list.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}