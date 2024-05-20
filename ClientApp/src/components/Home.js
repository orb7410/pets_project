import '../custom.css';
import { Link } from 'react-router-dom';

const entry = {
    name: "",
    created_at: "",
    type: "",
    color: "",
    Age: "",
}

export default function Home (props) {
  
  const addNewPet = () => {
    console.log("The New Pet Is: ", entry)
    fetch("api/pet", {
        method: "POST",
        body:entry,
        headers:{
            "content-type": "application/json"
        }
    }).then(r=>{
        console.log("Response from backend for adding new Pet", r)
    }).catch(e=>console.log("Error adding new Pet: ", e))
}

  
  const newData = (e) => {
    const name = e.target.name;
    let  val = e.target.value


      if(name === "age"){
          val = Number(val)
      }
      
      if(name === "created-at"){
        val = Date(val)
      }


    entry[name] = val
    console.log("The New Pet Is:", entry)
  }

  const ageOptions = [];
  for (let age = 1; age <= 120; age++) {
      ageOptions.push(<option value={age}>{age}</option>);
  }


  var petsTypes = ['Dog', 'Cat', 'Horse', 'Other'],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


    return  (
        <section className="add-form">
            <Link to="/pets" className="pet-sum-btn">Sum Pets</Link>

            <h1>Add A New Pet</h1>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="n" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="created-at">Created At</label>
                <input type="text" name="created-at" id="ct" onChange={newData}/>
            </div>

            <div>
                <label htmlFor="type">Type</label>
                <select type="text" name="type" id="tp" onChange={newData}>
                    {petsTypes}    
                </select>
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <select type="text" name="age" id="age" onChange={newData}>
                {petsTypes.map(MakeItem)}    
                </select>
            </div>

            <div>
                <button className="add-btn" onClick={addNewPet}>Add Pet</button>
            </div>
        </section>




    )
    }