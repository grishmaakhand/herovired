import "./Cafe.css";
import { useState, useEffect } from "react";

export default function Cafe(props) {
  const [menuData, setMenuData] = useState({
    flag: false,
    foodData: null,
    drinksData: null,
  });
  async function getData() {
    let url = "http://localhost:3200/data";
    let response = await fetch(url);
    let responseData = await response.json();
    console.log(responseData);
    setMenuData({
      flag: true,
      foodData: responseData[0],
      drinksData: responseData[1],
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="menu">Menu</h1>
      {menuData.flag == true ? (
        <div>
          <div className="food-item">
            <h1 className="menuitem">Food Menu</h1>
            {menuData.foodData.map((item) => {
              return (
                <h2 className="item">
                  {item.foodName}:{item.price}
                </h2>
              );
            })}
          </div>
          <div className="drink-item">
            <h1 className="menuitem">Drink Menu </h1>
            {menuData.drinksData.map((item) => {
              return (
                <h2 className="item">
                  {item.drinkName}:{item.price}
                </h2>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
}
// export default function Cafe(props) {
//   return (
//     <div>
//       <h1>cafe page</h1>
//     </div>
//   );
// }
