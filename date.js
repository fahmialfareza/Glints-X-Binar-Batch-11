const moment = require("moment-timezone");

expired = moment(Date.now() + 2 * 60 * 1000);
expired = expired.tz("UTC").format().replace("T", " ").replace("Z", "");
console.log(expired);
