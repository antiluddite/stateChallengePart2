import { useState } from "react";

function PracticeComponent() {
  const [userList, setUserList] = useState([
    {
      id: 0,
      firstName: "Simone",
      lastName: "Cox"
    },
    {
      id: 1,
      firstName: "Marcus",
      lastName: "Delgado"
    },
    {
      id: 2,
      firstName: "Caitlyn",
      lastName: "Schmit"
    }
  ]);

  const updateUser = (idToUpdate, dataToUpdate) => {
    // TODO: Update the data on one user object using the provided data
    // idToUpdate is the id of the user to update
    // Make sure you do not set state directly!
    

    // Note: One way to check that you are accounting for 
    // asynchronous updates is to try updating two items 
    // in two separate calls to the state setting function
    // (you can copy and paste to get the same line twice,
    // then change each call to use a different id).
    // It should update both of them.
    // If it only updates one then it is working off
    // of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      { userList.map(user => (
        <div className="mb-3" key={user.id}>
          <button className="btn btn-primary me-3"
            onClick={ () => updateUser(user.id, { firstName: "Bob" }) }>
            Set First Name to Bob
          </button>
          {user.firstName} {user.lastName}
        </div>
      ))}
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
        Update a piece of state to delete items from an array.
      </p>
      <p>
        When it is working correctly, each user's first name
        should change to Bob when the button is clicked.
        The users should stay in the same order and they should
        keep their last names.
      </p>
      <p>
        Make sure you do not set state directly!
      </p>
    </div>
  )
}