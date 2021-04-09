const axios = require("axios");

let config = {
  method: "get",
  url: "https://api.asklora.ai/api-universe/universe/?currency=USD",
  headers: {
    Cookie:
      "csrftoken=wdlUbyavIBpQgmDj65kDC72t6BsL9wAlGUtg9fU1nR9XRZEIVfNEvQr5jr1EZvAv",
  },
};

const getTicker = async () => {
  let res = await axios(config);
  let data = res.data;

  data.results.map((result, index) => {
    if (index == 1) {
      console.log(result.ticker);
    }
  });
};

getTicker();
