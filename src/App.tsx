import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'

interface puppy{
  id:number,
  name:string,
  email:string,
  isCute:boolean,
  age:number,
  ownerId:number,
  tricks:[]
}

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup:puppy = puppies.find((pup:puppy)=> pup.id === featPupId)

  return (
    <div className="App">
      <div className="wrapper">
        <div className="list">
          {
            puppies.map((puppy:puppy) => {
                return <>
                    <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>{puppy.name}</p>
                  
                  </>
              })
          }
       </div>
       {featPupId && (
        <div className="display">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li key="{featPupId}">Poopy ID: { featPupId }</li>
            <li key="{featuredPup.age}">Age: {featuredPup.age}</li>
            <li key="{featuredPup.email}">Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
export default App
