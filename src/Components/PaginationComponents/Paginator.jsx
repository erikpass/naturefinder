import React, { useContext } from 'react';
import { Context } from '../State/Store';
import actions from "./../Actions/index";

export default function Paginator() {
  const [state, dispatch] = useContext(Context);


  const incrementPage = () => {
    if (state.currentPage === state.maxPages) {
      return;
    }
    dispatch({type: actions.INC_SEARCH_PAGE });
  }

  const decrementPage = () => {
    if (state.currentPage === 0) {
      return;
    }
    dispatch({type: actions.DEC_SEARCH_PAGE });
  }

  return (
    <div className="paginator">
      <div>
        <button onClick={() => decrementPage()}>Back</button>
        <span>{`Page ${state.currentPage} of ${state.maxPages}`}</span>
        <button onClick={() => incrementPage()}>Next</button>
      </div>
    </div>
  );
};
