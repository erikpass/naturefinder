import { useContext, useEffect, useState } from "react"
import { Context } from './State/Store'
import actions from './Actions/index'
import {ISOlist} from "./../API/NationISO"
import Paginator from "./PaginationComponents/Paginator"
import Dropdown from "./Dropdown/Dropdown"

export default function SearchFormComponent() {
  const [, dispatch] = useContext(Context)
  const [nationsOptions, setNationsOptions] = useState([])


  useEffect(() => {
    const nations = ISOlist;
    let _nationsOptions = [];
    for (const nation of Object.entries(nations)) {
      _nationsOptions.push(
        <option key={nation[0]} value={nation[0]}>{nation[1].name}</option>
      )

    }
    setNationsOptions(_nationsOptions)
  },[])

  const handleInputNation = (e) => {
    dispatch({type: actions.SET_SEARCH_NATION, payload: e.target.value})
  }

  return (
    <div className="searchform-component">
      <div className="custom-select">
        <select onChange={handleInputNation}>
          <option key={"defaultOption"} value="" defaultValue={true}>Select nation to search by...</option>
          {nationsOptions}
        </select>
        <span className="custom-select-arrow"></span>
      </div>
      <Paginator />
    </div>
  )
}