import { FILTER, setLabel, setSidebar } from "./action"
import { useReducer, createContext } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    // case FILTER:
    //   const name = action.payload;
    //   const newArticles = state.articles.filter(art => art.attributes.labels.data.filter(item => item.attributes.name === name));
    //   return { ...state, articles: newArticles };
    case setLabel:
      return { ...state, labels: action.payload };
    case setSidebar:
      return { ...state, sidebar: action.payload };
  }
}

export const ReducerContext = createContext();


export const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ReducerContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      {children}
    </ReducerContext.Provider>
  )
}

