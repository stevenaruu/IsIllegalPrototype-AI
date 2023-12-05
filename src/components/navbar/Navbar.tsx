import { Children } from "react";
import { INavbar } from "./Navbar.interfaces";

const Navbar = (props: INavbar) => {
  const { children, variant, color } = props;
  return (
    <div className={`py-4 border-b-8 ${color}`}>
      <ul className={`container mx-auto font-bold text-xl flex gap-7 ${variant}`}>
      {Children.map(children, child =>
        <> {child} </>
      )}
      </ul>
    </div>
  )
}

export default Navbar;