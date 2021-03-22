import React, { useContext, useEffect } from 'react';
import { Context } from '../State/Store';
import actions from "./../Actions/index";
import "./../Styles/PaginatorStyle.scss"

export default function Paginator() {
  const [state, dispatch] = useContext(Context);


  useEffect(() => {
    
  }, []);

  const incrementPage = () => {
    if (state.currentPage >= state.maxPages) {
      return;
    }
    console.log('increment')
    dispatch({type: actions.INC_SEARCH_PAGE });
  }

  const decrementPage = () => {
    if (state.currentPage === 0) {
      return;
    }
    console.log('decrement')
    dispatch({type: actions.DEC_SEARCH_PAGE });
  }

  return (
    <div className="paginator">
      <button onClick={() => decrementPage()}>Back</button>
      <button onClick={() => incrementPage()}>Next</button>
      <p>{state.maxPages}</p>
      <p>{state.currentPage}</p>
    </div>
  );
};
