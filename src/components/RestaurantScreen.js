import RestaurantList from "./RestaurantList";

const RestaurantScreen = () => (
  <div>
    <h1>Restaurants</h1>
    <RestaurantList loadRestaurants={() => {}} restaurants={[]} />
  </div>
);

export default RestaurantScreen;
