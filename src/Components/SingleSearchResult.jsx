import React from 'react'
import { useContext } from "react"
import { Context } from './State/Store'
import actions from './Actions/index'

export default function SingleSearchResult(props) {
  const [, dispatch] = useContext(Context);

  return (
    <div className={props.selected === true ? "search-result selectedResult" : "search-result"} 
        key={props.elementGlobalId} 
        onClick={() => dispatch({type: actions.SET_SELECTION, payload: {nations: props.nationsISO3, selectedId: props.id}})} >
      <span className="common-name">{props.primaryCommonName}</span>
      <span className="scientific-name">{props.scientificName}</span>
    </div>
  )
}
