import { useState, useContext, useEffect } from "react";

import { CartContext } from "../store/cart-context";

export default function MealItem() {
  const [listOfMeals, setListOfMeals] = useState([]);

  const [cartItemState, dispatch] = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch a data.");
      }

      setListOfMeals(resData);
    }

    fetchData();
  }, []);

  return (
    <ul id="meals">
      {listOfMeals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="Test image" />
            <div className="meal-item-description">
              <h3>{meal.name}</h3>
              <p className="meal-item-price">${meal.price}</p>
              <p>{meal.description}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id: meal.id,
                      name: meal.name,
                      price: meal.price,
                      quantity: 1,
                    },
                  })
                }
                className="button"
              >
                Add to cart
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
