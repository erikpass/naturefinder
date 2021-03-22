import { useContext, useEffect, useState } from "react"
import SingleSearchResult from "./SingleSearchResult";
import NationsList from "./../API/NationISO";
import { Context } from "./State/Store";


/*
  data = {results: Array(20), resultsSummary: {…}, searchCriteria: {…}}
*/


function getNationISO3(iso2Code, nationsList) {
  if (!nationsList.hasOwnProperty(iso2Code)) return "";
  return nationsList[iso2Code].alpha3;
}

export default function ResultsDisplayComponent() {
  const [state,] = useContext(Context);
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (!state.httpResponse.hasOwnProperty('results')) {
      return;
    }
    const mapResults = state.httpResponse.results.map(result => {
      const nationsISO3 = result.nations.map((nation) => {
        return getNationISO3(nation.nationCode, NationsList);
      })

      const isSelected = (state.selectedId === result.elementGlobalId)
      
      return (
        <SingleSearchResult
        selected={isSelected}
         key={result.elementGlobalId}
         id={result.elementGlobalId}
         primaryCommonName={result.primaryCommonName}
         scientificName={result.scientificName}
         nationsISO3={nationsISO3}
         />
      )
    })
    setResults(mapResults)
  },[state.httpResponse, state.selectedId])



  return (<div className="searchlist-component">{results}</div>)
}