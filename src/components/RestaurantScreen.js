import RestaurantList from "./RestaurantList";

const RestaurantScreen = () => (
  <div>
    <h1>Restaurants</h1>
    <RestaurantList loadRestaurants={() => {}} />
  </div>
);

export default RestaurantScreen;
