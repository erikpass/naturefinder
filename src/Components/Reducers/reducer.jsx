import actions from '../Actions/index'

export default function Reducer(state, action) {
  switch(action.type) {
    case actions.SET_SEARCH: {
      return { ...state, searchField: action.payload }
    }
    case actions.SET_SELECTION: {
      if (state.nation === action.payload) return state
      return { ...state, nations: action.payload.nations, selectedId: action.payload.selectedId }
    }
    case actions.SET_SEARCH_NATION: {
      return { ...state, searchNation: action.payload }
    }
    case actions.DEC_SEARCH_PAGE: {
      return { ...state, currentPage: state.currentPage - 1 }
    }
    case actions.INC_SEARCH_PAGE: {
      return { ...state, currentPage: state.currentPage + 1 }
    }
    case actions.SET_MAX_PAGES: {
      return { ...state, maxPages: action.payload }
    }
    case actions.SET_HTTP_RESPONSE: {
      return { ...state, httpResponse: action.payload, maxPages: action.payload.resultsSummary.totalPages - 1}
    }


    default: return state;
  }
}