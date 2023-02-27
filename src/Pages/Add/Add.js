import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./add.css";
import axios from "axios";
const Add = () => {
  const keys = [
    "fe7eaecc00msh96aa419a7e02c15p1ffec3jsne5aad33fb774",
    "bee3169c7cmshbf875770da04072p169590jsn2f2f33597948",
    "da36315545msh0f9e3917dd71c49p1e5f00jsn9719a69b376c",
    "1a8ae44047msh8d6a75edcee2629p105f07jsn985e02fdeafa",
    "fe7eaecc00msh96aa419a7e02c15p1ffec3jsne5aad33fb774",
    "bee3169c7cmshbf875770da04072p169590jsn2f2f33597948",
    "da36315545msh0f9e3917dd71c49p1e5f00jsn9719a69b376c",
    "1a8ae44047msh8d6a75edcee2629p105f07jsn985e02fdeafa",
  ];
  const [basic, setBasic] = useState({ name: "", list: [] });
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const handlePostChange = (e) => {
    //console.log(e.target.value);
    setPost(e.target.value);
  };
  const handleBasicChange = (e) => {
    console.log(e.target.name);
    setBasic({ ...basic, [e.target.name]: e.target.value });
  };

  const addPost = () => {
    const postData = {
      id: post,
      value: value == 1 ? 1 : value,
      key: keys[count],
    };

    console.log(postData);
    post && setPosts([...posts, postData]);
    setPost("");
    setValue(value * 2);
    setCount(count + 1);
  };

  const savePost = () => {
    var data = JSON.stringify({
      name: basic.name,
      list: basic.list.split(","),
      posts: posts,
    });
    console.log(data);
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://tangible-spiced-lancer.glitch.me/api/instagram",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODFiODVkNjZiYjE3MmRhODRjYzM5YyIsImZpcnN0TmFtZSI6IlNpbWVuIiwibGFzdE5hbWUiOiJNdW50ZXIiLCJlbWFpbCI6ImNsaW5zakBtYWlsaW5hdG9yLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFIxOFRoUnZPLk5LTzFhSWVOL1E1QmVxdGJEOHdWa1NMTzFQeTlCYWYzdFdZZWxsS0ZnYm55IiwidXNlcklkIjoiZDFhY2Y0ZWItODNlMi00NDNmLTg0YjgtMjhjZThkM2U3MDYwIiwidXNlclR5cGUiOiJhZG1pbiJ9LCJpYXQiOjE2NzYyODIzMTN9.ZK7MMEVryl-4X4DIBB_-t6h7chPhJae2CB_cuchy770",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form-cont">
      <div className="form-cont-basic">
        <TextField
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => handleBasicChange(e)}
        />
        <TextField
          name="list"
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
          onChange={(e) => handleBasicChange(e)}
        />
      </div>
      <div className="form-cont-basic">
        <TextField
          value={post}
          name="postId"
          id="outlined-basic"
          label="POST ID"
          variant="outlined"
          onChange={(e) => handlePostChange(e)}
        />
        <Button className="add-btn" onClick={addPost} variant="contained">
          ADD
        </Button>
      </div>
      <div className="form-cont-basic">
        {posts &&
          posts.map((item, index) => {
            return <p key={index}> {item.id}</p>;
          })}
      </div>

      <Button className="add-btn" onClick={savePost} variant="contained">
        SAVE
      </Button>
    </div>
  );
};

export default Add;
