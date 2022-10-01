import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AddIcon from "@mui/icons-material/Add";
import "./TopRefferal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import image1 from '../../img/tabs-mobile.png';
import image2 from '../../img/tabs-console.png';
import image3 from '../../img/tabs-desktop.png';

export default function TopRefferal() {
  const rows = [
    {
      Image: "https://i.postimg.cc/Kcs9GGjN/apple-i-Phone-13-pro.png",
      ProductName: "SamsungS22",
      status: "Out-of-Stock",
      review: "$12.5k",
      convertion: "+25%",
    },
    {
      Image: "https://i.postimg.cc/wv57WTPd/samsung-s22.png",
      ProductName: "OnePlus",
      status: "Available",
      review: "$12.5k",
      convertion: "-15%",
    },
    {
      Image: "https://i.postimg.cc/L5nFJxj0/oneplus-9-pro.png",
      ProductName: "Apple",
      status: "Comming-Soon",
      review: "$12.5k",
      convertion: "+25%",
    },
  ];
  return (
    <div>
      <div className="wrraper-tn" style={{border:'1px solid',borderRadius:'14px',border:'1px solid rgba(76, 78, 100, 0.12'}}>
        <div className="topheader">
          <div className="topleftheader">
            <span className="topref">Top Referal Source</span>
            <span className="eight">82% Activity Growth</span>
          </div>
          <div className="verticalrate">
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="middletab">
          <div className="inn">
            <button className="muibuttonbase cu">
              <div className="iconbase">
                <img src={image1} alt="" className="tab-mobile" />
              </div>
            </button>
            <button className="muibuttonbase do">
              <div className="iconbase">
                <img src={image2} alt="" />
              </div>
            </button>
            <button className="muibuttonbase do">
              <div className="iconbase">
                <img src={image3} alt="" />
              </div>
            </button>
            <button className="muibuttonbase do">
              <div className="iconbase">
                 <div className="addicon">
                 <AddIcon />
                 </div>
               
              </div>
            </button>
          </div>
        </div>
        <TableContainer className="table" >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="topTablerow">
                <TableCell className="tableCell1">Image</TableCell>
                <TableCell className="tableCell1">Product Name</TableCell>
                <TableCell className="tableCell1">Status</TableCell>
                <TableCell className="tableCell1">Revenu</TableCell>
                <TableCell className="tableCell1">Conversion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="TableBody">
              {rows.map((row) => (
                <TableRow key={row.convertion}>
                  <TableCell component="th" scope="row">
                    <div className="imgwrraper">
                      <img src={row.Image} alt="" />
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.ProductName}</TableCell>
                  <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                  <TableCell className="tableCell">{row.review}</TableCell>
                  <TableCell className="tableCell"><span className="convertion">{row.convertion}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
