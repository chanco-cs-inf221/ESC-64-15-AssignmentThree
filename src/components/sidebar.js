import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router";


const SideBar = (props) => {
  return (    
    <Menu className="menu-position">
      <Link className="menu-item" to="/">
        Home
      </Link>
    
      <Link className="menu-item" to="/forms">
        Forms
      </Link>
      <Link className="menu-item" to="/success">
        OutFits! &rarr;
      </Link>

      <Link className="menu-item" to="/staff">
        Other Staffs
      </Link>

      <Link className="menu-item" to="/enroll">
        Enroll Wih Us
      </Link>

      <Link className="menu-item" to="/headmaster">
        HeadTeacher
      </Link>

      <Link className="menu-item" to="/grade-entry-point">
        Grade Entry Point
      </Link>

    </Menu>
   
  );
};

export default SideBar;