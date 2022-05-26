import { useState } from "react";

const startingFormState = {
  name: "",
  calories: "",
  image: "",
  servings: ""
}

function AddFood(props) {
  const [formState, setFormState] = useState(startingFormState)

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log("formState: ", formState)
    props.addFood(formState)
    setFormState(startingFormState)
    // axios.post("/someURL", formState)

  }

  const onInputChange = (event)=>{
    let value
    if(event.target.type === "checkbox") value = event.target.checked
    else value = event.target.value
    // const newFormState = Oject.assign({}, formState, {[event.target.name]: value}})
    const newFormState = {...formState, [event.target.name]: value}
    setFormState(newFormState)
  } 


  return (
    <div className="AddFood">
      <h4>Add a Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={onInputChange} /> <br/><br/>

        <label>calories:</label>
        <input type="text" name="calories" value={formState.calories} onChange={onInputChange} /><br/><br/>

        <label>servings:</label>
        <input type="text" name="servings" value={formState.servings} onChange={onInputChange} /><br/><br/>
        
        <label>image:</label>
        <input type="text" name="image" value={formState.image} onChange={onInputChange} /><br/><br/>
    
        <button type="submit">Add a Food</button>
      </form>
    </div>
  );
}

export default AddFood;
