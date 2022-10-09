import React from "react";
import "./PermissionList.css";

import Rowperpage from "./Rowperpage";
import Tabelview from "./Tabelview";
import Topdetails from "./Topdetails";
import Toptitle from "./Toptitle";

export default function PermissionList() {
  const Management={
    ProjectPlanning:'Management',
    Adminstration:'Adminstration',
    User:'User',
    support:'manager',
    Date:'14 Oct 2022,10:20 AM'
  }
  const ManageBilling={
    ProjectPlanning:'Manage & Billing Role',
    Adminstration:'Adminstration',
    User:'User',
    support:'manager',
    Date:'14 Oct 2022,10:20 AM'
  }
  const AddandRemove={
    ProjectPlanning:'Add & Remove User',
    Adminstration:'Adminstration',
    User:'User',
    support:'manager',
    Date:'14 Oct 2022,10:20 AM'
  }
  const ProjectPlanning={
    ProjectPlanning:'Project Planning',
    Adminstration:'Adminstration',
    User:'User',
    support:'support',
    Date:'14 Oct 2022,10:20 AM'
  }
  const topdetailsdata={
    heading:"Permission List",
    para:'Each category (Basic, Professional, and Business) includes the four predefined roles shown below.'
  }
  return (
    <div>
      <main className="mainWidth">
        <div className="mainclasscontainer">
          <Topdetails {...topdetailsdata}/>
          <div className="tableContentList">
            <div className="searchadd">
              <div className="outer-out">
                <input
                  type="text"
                  id="searchpermission"
                  placeholder="Search Permission"
                />
              </div>
              <button className="Addbtn">Add Permission</button>
            </div>
            <div className="fulltable">
              <div className="administrationsec">
                <Toptitle />
                <div className="Tabelview"> 
                   <Tabelview {...Management}/>
                   <Tabelview {...ManageBilling}/>
                   <hr/>
                   <Tabelview {...AddandRemove}/>
                   <hr/>
                   <Tabelview {...ProjectPlanning}/>
                   <hr />
                   <Tabelview {...ProjectPlanning}/>
                   <hr />
                   <Tabelview {...ProjectPlanning}/>
                   <hr />
                   <Tabelview {...ProjectPlanning}/>
                   <hr />
                   <Tabelview {...ProjectPlanning}/>
                   <hr/>
                </div>
              </div>
              <Rowperpage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
