import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

const Button = ({ listData }) => {
  console.log(listData);
  const [likesBefore, setLikesBefore] = useState([])
  const [likesAfter, setLikesAfter] = useState([])


  useEffect(() => {
    //getLikesBefore()
  }, [])

  useEffect(() => {
    const unmatchedIndexes = [];
    const values = [1,2,4,8,16,32,64,128,256,512]
    for (let i = 0; i < likesBefore.length; i++) {
      if (likesBefore[i] !== likesAfter[i]) {
        unmatchedIndexes.push(i);
      }
    }
    let position = 0;
    position = unmatchedIndexes.map((item)=>{
      return values[item] + position
    })
    const sum = position.reduce((total, num) => total + num, 0);
    console.log(position,"position of the item",listData.list[sum-1]);
  }, [likesAfter])



  const getLikesBefore = () => {

    const genOpt = (code, key) => {
      const options = {
        method: "GET",
        //url: URL,
        url: "https://instagram28.p.rapidapi.com/media_info_v2",
        params: { short_code: code },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
        },
      };
      return options
    }

    async function fetchData() {
      try {
        const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10] = await Promise.all([
          listData.posts[0] && axios.request(genOpt(listData.posts[0].id, listData.posts[0].key)).then(res => res.data.items[0].like_count),
          listData.posts[1] && axios.request(genOpt(listData.posts[1].id, listData.posts[1].key)).then(res => res.data.items[0].like_count),
          listData.posts[2] && axios.request(genOpt(listData.posts[2].id, listData.posts[2].key)).then(res => res.data.items[0].like_count),
          listData.posts[3] && axios.request(genOpt(listData.posts[3].id, listData.posts[3].key)).then(res => res.data.items[0].like_count),
          listData.posts[4] && axios.request(genOpt(listData.posts[4].id, listData.posts[4].key)).then(res => res.data.items[0].like_count),
          listData.posts[5] && axios.request(genOpt(listData.posts[5].id, listData.posts[5].key)).then(res => res.data.items[0].like_count),
          listData.posts[6] && axios.request(genOpt(listData.posts[6].id, listData.posts[6].key)).then(res => res.data.items[0].like_count),
          listData.posts[7] && axios.request(genOpt(listData.posts[7].id, listData.posts[7].key)).then(res => res.data.items[0].like_count),
          listData.posts[8] && axios.request(genOpt(listData.posts[8].id, listData.posts[8].key)).then(res => res.data.items[0].like_count),
          listData.posts[9] && axios.request(genOpt(listData.posts[9].id, listData.posts[9].key)).then(res => res.data.items[0].like_count),
        ]);
        console.log("data from all");
        const allLikes = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]
        console.log(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, "data from all");
        const validLikes = allLikes.filter((like) => like !== undefined);
        setLikesBefore(validLikes)

      } catch (error) {
        // handle errors here
      }
    }
    fetchData()

    // axios
    //   .request(genOpt("GET","https://tangible-spiced-lancer.glitch.me/api/instagram"))
    //   .then(function (response) {
    //     console.log(response.data);
    //     //console.log("LIKES COUNT - ", response.data.items[0].like_count);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    console.log("button clicked");

  }

  const getLikesAfter = () => {

    const genOpt = (code, key) => {
      const options = {
        method: "GET",
        //url: URL,
        url: "https://instagram28.p.rapidapi.com/media_info_v2",
        params: { short_code: code },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
        },
      };
      return options
    }

    async function fetchData() {
      try {
        const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10] = await Promise.all([
          listData.posts[0] && axios.request(genOpt(listData.posts[0].id, listData.posts[1].key)).then(res => res.data.items[0].like_count),
          listData.posts[1] && axios.request(genOpt(listData.posts[1].id, listData.posts[1].key)).then(res => res.data.items[0].like_count),
          listData.posts[2] && axios.request(genOpt(listData.posts[2].id, listData.posts[2].key)).then(res => res.data.items[0].like_count),
          listData.posts[3] && axios.request(genOpt(listData.posts[3].id, listData.posts[3].key)).then(res => res.data.items[0].like_count),
          listData.posts[4] && axios.request(genOpt(listData.posts[4].id, listData.posts[4].key)).then(res => res.data.items[0].like_count),
          listData.posts[5] && axios.request(genOpt(listData.posts[5].id, listData.posts[5].key)).then(res => res.data.items[0].like_count),
          listData.posts[6] && axios.request(genOpt(listData.posts[6].id, listData.posts[6].key)).then(res => res.data.items[0].like_count),
          listData.posts[7] && axios.request(genOpt(listData.posts[7].id, listData.posts[7].key)).then(res => res.data.items[0].like_count),
          listData.posts[8] && axios.request(genOpt(listData.posts[8].id, listData.posts[8].key)).then(res => res.data.items[0].like_count),
          listData.posts[9] && axios.request(genOpt(listData.posts[9].id, listData.posts[9].key)).then(res => res.data.items[0].like_count),
        ]);
        console.log("data from all");
        const allLikes = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]
        console.log(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, "data from all");
        const validLikes = allLikes.filter((like) => like !== undefined);
        setLikesAfter(validLikes)

      } catch (error) {
        // handle errors here
      }
    }
    fetchData()

    // axios
    //   .request(genOpt("GET","https://tangible-spiced-lancer.glitch.me/api/instagram"))
    //   .then(function (response) {
    //     console.log(response.data);
    //     //console.log("LIKES COUNT - ", response.data.items[0].like_count);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    console.log("button clicked");

  }






  const handleBtnClick = () => {
    getLikesAfter()
    // const genOpt = (code, key) => {
    //   const options = {
    //     method: "GET",
    //     //url: URL,
    //     url: "https://instagram28.p.rapidapi.com/media_info_v2",
    //     params: { short_code: code },
    //     headers: {
    //       "X-RapidAPI-Key": key,
    //       "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
    //     },
    //   };
    //   return options
    // }

    // async function fetchData() {
    //   try {
    //     const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10] = await Promise.all([
    //       listData.posts[0] && axios.request(genOpt(listData.posts[0].id, listData.posts[1].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[1] && axios.request(genOpt(listData.posts[1].id, listData.posts[1].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[2] && axios.request(genOpt(listData.posts[2].id, listData.posts[2].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[3] && axios.request(genOpt(listData.posts[3].id, listData.posts[3].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[4] && axios.request(genOpt(listData.posts[4].id, listData.posts[4].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[5] && axios.request(genOpt(listData.posts[5].id, listData.posts[5].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[6] && axios.request(genOpt(listData.posts[6].id, listData.posts[6].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[7] && axios.request(genOpt(listData.posts[7].id, listData.posts[7].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[8] && axios.request(genOpt(listData.posts[8].id, listData.posts[8].key)).then(res => res.data.items[0].like_count),
    //       listData.posts[9] && axios.request(genOpt(listData.posts[9].id, listData.posts[9].key)).then(res => res.data.items[0].like_count),
    //     ]);
    //     console.log("data from all");

    //     console.log(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, "data from all");

    //   } catch (error) {
    //     // handle errors here
    //   }
    // }
    // fetchData()

    // // axios
    // //   .request(genOpt("GET","https://tangible-spiced-lancer.glitch.me/api/instagram"))
    // //   .then(function (response) {
    // //     console.log(response.data);
    // //     //console.log("LIKES COUNT - ", response.data.items[0].like_count);
    // //   })
    // //   .catch(function (error) {
    // //     console.error(error);
    // //   });
    // console.log("button clicked");
  };

  return (
    <div
      onClick={handleBtnClick}
      className="btn"
      style={{ height: "100px", width: "100px", backgroundColor: likesBefore.length ? "green" : "red" }}
    >
      START
    </div>
  );
};

export default Button;
