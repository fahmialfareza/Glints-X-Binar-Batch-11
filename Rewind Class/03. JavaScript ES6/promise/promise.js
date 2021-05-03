const axios = require("axios");

const findAll = () => {
  return axios({
    method: "get",
    url: "https://travelook.gabatch11.my.id/room/",
  });
};

const findOne = (id) => {
  return axios({
    method: "get",
    url: `https://travelook.gabatch11.my.id/room/detail/${id}`,
  });
};

const findState = () => {
  return axios({
    method: "get",
    url: `https://travelook.gabatch11.my.id/room/state`,
  });
};

// Promise
findAll()
  .then((responseFindAll) => {
    return Promise.all([findOne(responseFindAll.data.data[0].id), findState()]);
  })
  .then((responseData) => {
    console.log(responseData[0].data.message);
    console.log(responseData[1].data.message);
  })
  .catch((error) => console.error(error.response.data));

// Async function
async function getRooms() {
  try {
    const responseFindAll = await findAll();
    const responseData = await Promise.all([
      findOne(responseFindAll.data.data[0].id),
      findState(),
    ]);

    console.log(responseData[0].data.message);
    console.log(responseData[1].data.message);
  } catch (error) {
    console.error(error.response.data);
  }
}

getRooms();
