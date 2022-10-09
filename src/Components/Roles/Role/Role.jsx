import React from "react";
import "./Role.css";
import Topdetails from "../../RolesPermission/PermissionList/Topdetails";
import TableList from "./TableList";

import Gridcard from "./Gridcard";
import Card from "./Card";

import img1 from '../Role/Image/1.png'
import img2 from '../Role/Image/5.png'
import img3 from '../Role/Image/3.png'
import img4 from '../Role/Image/4.png'
import img5 from '../Role/Image/5.png'
import img6 from '../Role/Image/6.png'
import img8 from '../Role/Image/8.png'

export default function Role() {
  const topdetailsdata = {
    heading: "Role List",
    para: "A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need",
  };
  const totaluserwithrole = {
    heading: "Total users with their roles",
    para: "Find all of your company’s administrator accounts and their associate roles.",
  };

  return (
    <div>
      <main className="mainWidth">
        <div className="mainclasscontainer">
          <Topdetails {...topdetailsdata} />
          <div className="GridLayout-Structre">
            <Gridcard diff="Admistration" img1= {img1} img2= {img2} img3= {img3} img4= {img4}/>
            <Gridcard diff= "Manager" img1= {img1} img2= {img6} img3= {img5} img4= {img8}  />
            <Gridcard diff= "User" img1= {img1} img2= {img6} img3= {img5} img4= {img8}  />
            <Gridcard diff= "Support" img1= {img1} img2= {img6} img3= {img5} img4= {img8}  />
            <Gridcard diff= "Restricted User" img1= {img1} img3= {img3} img2= {img6} img4= {img8}  />
            <Card/>
          </div>
          <div>
            {" "}
            <Topdetails {...totaluserwithrole} />
          </div>
        </div>
        <div className="mainclasscontainer">
          <TableList />
        </div>
      </main>
    </div>
  );
}

// <Gridcard {...carddetails6} />