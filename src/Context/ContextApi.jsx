import React,{createContext, useReducer} from "react";

export const AppContext=createContext();


const initvalue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};

const GitHubReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "Success":
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case "Error":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    default:
      return state;
  }
};

export const AppContextProvider=({children})=>{
  const [state, dispatch] = useReducer(GitHubReducer, initvalue);
  return(
  <>
<AppContext.Provider value={{state,dispatch}} >{children}</AppContext.Provider>
  </>)
}

