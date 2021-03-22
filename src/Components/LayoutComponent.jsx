import MapComponent from "./MapComponent";
import NatureViewerComponent from "./NatureViewerComponent";
import NavbarComponent from "./NavbarComponent";
import SearchFormComponent from "./SearchFormComponent";
import Store from "./State/Store";
import "./Styles/LayoutStyle.scss"

export default function LayoutComponent() {
  return (
    <Store>
      <div className="layout">
        <NavbarComponent />
        <MapComponent />
        <div className="listComponent bg-white rounded-x1 shadow-md">
          <SearchFormComponent />
          <NatureViewerComponent />
        </div>
      </div>
    </Store>
  )
}