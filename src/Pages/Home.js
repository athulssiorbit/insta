import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setListData }) => {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://tangible-spiced-lancer.glitch.me/api/instagram")
      .then((resp) => {
        setList(resp.data);
        console.log(resp);
      });
  }, []);

  const handleClink = (item) => {
    //console.log(item);
    setListData(item);
    nav("/main");
  };

  const handleEditClick = () => {
    //console.log(item);
    nav("/create");
  };

  return (
    <div style={{ height: "60%", width: "100%" }}>
      <div style={{ height: "100%", width: "100%" }}>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClink(item)}
              style={{
                // margin: "12px",
                // padding: "12px",
                height: "42px",
                width: "100%",
                backgroundColor: "yellowgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div
        onClick={handleEditClick}
        style={{
          height: "42px",
          width: "100%",
          backgroundColor: "aliceblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ADD LIST
      </div>
    </div>
  );
};

export default Home;
