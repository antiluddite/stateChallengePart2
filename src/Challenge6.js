import { useState } from "react";

function PracticeComponent() {

  const [taskList, setTaskList] = useState([
    {
      id: 0,
      text: "Write a novel"
    },
    {
      id: 1,
      text: "Binge watch The Office"
    },
    {
      id: 2,
      text: "Sieze the moment"
    }
  ]);

  const deleteFromTaskList = (idToDelete) => {
    // TODO: Update the state and remove the item
    // with the passed in id from the list
    // Make sure you do not update state directly!
    

    // Note: One way to check that you are accounting for 
    // asynchronous updates is to try deleting two items 
    // in two separate calls to the state setting function
    // (you can copy and paste to get the same line twice,
    // then change each call to use a different id).
    // It should delete both of them.
    // If it only deletes one then it is working off
    // of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      { taskList.map(task => (
        <div className="mb-3" key={task.id}>
          <button className="btn btn-danger me-3"
            onClick={() => deleteFromTaskList(task.id)}>
            Delete
          </button>
          {task.text}
        </div>
      ))}
    </>
  )
}

export default function Challenge6() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 6</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Update a piece of state to delete items from an array.
      </p>
      <p>
        When it is working correctly, there should be three
        tasks displaying initially, and whenever the Delete button
        is clicked for a particular task, that task should be deleted.
      </p>
      <p>
        Make sure you do not update state directly.
      </p>
    </div>
  )
}