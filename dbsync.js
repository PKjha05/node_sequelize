import sequelize from "./config/dbconfig.js";
const syncModels = () => {
  sequelize
    .sync({ alter: false })
    .then(async (result) => {
      console.log("connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default syncModels;
