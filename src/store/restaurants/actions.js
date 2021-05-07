export const STORE_RESTAURANTS = "STORE_RESTAURANTS";

const storeRestaurants = (records) => ({
  type: STORE_RESTAURANTS,
  records,
});

export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then((records) => dispatch(storeRestaurants(records)));
};
