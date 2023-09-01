import React, { useContext } from "react";
import ImgCard from "./ImgCard";
import "./showroom.css";
import Context from "../context/CreateContext";

export default function Showroom() {
  const context = useContext(Context);
  const { data } = context;

  return (
    <div className="show">
      {data.status==="success"?data.message.map((img, key) => {
        return <ImgCard imageDetails={img} key={img} loc="home"/>;
      }) :
      <h1>No Data Found</h1>
      }
    </div>
  );
}
