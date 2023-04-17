import { createStore, combineReducers, applyMiddleware } from "redux";
import { Business } from "./Reducers/GetBusiness";
import { BusinessByForm } from "./Reducers/GetByForm";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      business: Business,
      businessByForm: BusinessByForm
    }), applyMiddleware(thunk, logger)
  )

  return store;
};