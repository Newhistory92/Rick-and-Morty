require("dotenv").config();
const {PASSWORD} = process.env
const users = [{ email: "federojo28@gmail.com", password: PASSWORD }];
module.exports = users;