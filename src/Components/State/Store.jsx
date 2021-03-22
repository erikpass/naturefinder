import {createContext, useEffect, useReducer} from 'react';
import Reducer from "../Reducers/reducer";

const initialState = {
  searchField: "",
  searchNation: "",
  selectedId: "",
  nations: [],
  httpResponse: {},
  currentPage: 0,
  maxPages: 0,
  what: "what"
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  /* useEffect(() => {
    console.log(state)
  }, [state]) */


  return(
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState);

export default Store;
