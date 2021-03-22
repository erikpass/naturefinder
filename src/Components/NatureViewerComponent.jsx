import { useContext, useEffect } from 'react';
import {BASE_URL, SEARCHFORM, SEARCH} from './../API/'
import actions from './Actions';
import ResultsDisplayComponent from './ResultsDisplayComponent';
import { Context } from './State/Store';

export default function NatureViewerComponent() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    //console.log(state.currentPage)
    
    const searchParameters = (state.searchNation) ? 
      { ...SEARCHFORM, locationCriteria: [{ paramType: "nation", nation: state.searchNation }], pagingOptions: { page: state.currentPage, recordsPerPage: 20 } } :
      { ...SEARCHFORM, pagingOptions: { page: state.currentPage, recordsPerPage: 20 } 
    }
    
    //console.log(searchParameters)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(searchParameters)
    }

    async function fetchData() {
      const response = await fetch(BASE_URL + SEARCH, requestOptions);
      const data = await response.json();
      dispatch({ type: actions.SET_HTTP_RESPONSE, payload: await data })
    }
    
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchNation, state.currentPage])

  return (
    <ResultsDisplayComponent />
  )
}