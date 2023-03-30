import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

class Dog extends Model {}

const config = {
  sequelize: sequelize,
  tableName: "Dog",
  timestamps: true,
};
Dog.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  config
);

export default Dog;
