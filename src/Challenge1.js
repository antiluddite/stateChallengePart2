import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called price
  // Give it an initial value of 2
  const [price, setPrice] = useState(2)

  // TODO: Delete the line below
  //const price = "ERROR";
  
  const onButtonClick = () => {
    // const copyOfPriceList = [...priceList]
    // copyOfPriceList.push(7)
    // setPriceList(copyOfPriceList)

    // const copyOfPriceList = [...priceList, 2]
    // setPriceList(copyOfPriceList)
    
    // setPriceList(function(theCurrentValueOfPriceList) {
    //   return [...theCurrentValueOfPriceList, 2]
    // })
    // setPriceList(function(theCurrentValueOfPriceList) {
    //   return [...theCurrentValueOfPriceList, 2]
    // })

    //setPriceList(currList => [...currList, 2])

    // const copyOfPerson = {...person}
    // copyOfPerson.favoriteColor = "green";
    // setPerson(copyOfPerson)

    // const copyOfPerson = {...person, favoriteColor: "green"}
    // setPerson(copyOfPerson)

    //setPerson({...person, favoriteColor: "green"})
    
    //setPerson(currPerson => ({...currPerson, favoriteColor: "green"}))

    // RULE 1: Make copies of all arrays and objects
    // RULE 2: If you're changing the state based on the previous state
    // you should use a function
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      The price is <strong>{ price }</strong>.
    </div>
  )
}

export default function Challenge1() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 1</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create a piece of state and give it an inital value.
      </p>
      <p>
        When it is working correctly you should see:<br/>
        The price is $2.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}