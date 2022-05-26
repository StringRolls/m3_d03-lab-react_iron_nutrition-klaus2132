import foods from "../foods.json";
import "../components/FoodList.css";


function List() {
    const foodsList = foods;
  

  return (
    <div className="list">
      <h2>Foods List</h2>

        {foodsList.map(food => {
            return (
                <div className="simpleFoodList">
                    <p> { food.name } </p>
                    <img className="images" src={food.image} alt="food"></img>
                </div>
            )})
        }

    </div>
  );
}

export default List;

