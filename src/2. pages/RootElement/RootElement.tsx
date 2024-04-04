import { Outlet } from "react-router-dom";
import { Navbar } from "../../3. widgets/Navbar";

function RootElement() {
  return (
    <>
      <Navbar />
      <div className="root-element">
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootElement;
