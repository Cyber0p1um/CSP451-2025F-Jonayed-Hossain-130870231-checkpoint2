import { connect, getUsers } from "./db.js";
console.log("DB:", connect());
console.log("Users:", getUsers());
