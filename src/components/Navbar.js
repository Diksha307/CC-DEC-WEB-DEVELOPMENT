
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar=()=> {
return(
<nav>
<ul>
 <li>
   <Link to="/comman">Common Converter</Link>
 </li>
 <li>
   <Link to="/engineer">Engineer Converter</Link>
 </li>
 <li>
   <Link to="/contact">Heat Converter</Link>
  </li>
</ul>
</nav>
);
}

export default Navbar;