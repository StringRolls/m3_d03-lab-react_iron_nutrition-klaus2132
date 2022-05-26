import { useState } from "react";
import FoodBox from './components/FoodBox';
import foods from "./foods.json";
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'
import { Divider } from "antd";


function App() {

  const [foodsData, setFoodsData] = useState(foods);
  const [filteredFood, setFilteredFood] = useState([...foods]);
  const [search, setSearch] = useState("");

  const handleFilter = (query) => {
    setSearch(query);

    if (query === "") {
      setFilteredFood(foodsData);
    } else {
      const newFilteredFood = foodsData.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFood(newFilteredFood);
    }
  };
  

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    setFilteredFood([...filteredFood, newFood]);
   
  
    setFoodsData(updatedFoodsData);
  
  };


  return (
    <div className="App">
  
    <AddFoodForm addFood={addNewFood} />

    <Divider plain>Search</Divider>
    <Search search={search} handleFilter={handleFilter} />

    { foodsData.map((foods) => 
    <FoodBox food = { foods }/>)}

    </div>
  );
}

export default App;
