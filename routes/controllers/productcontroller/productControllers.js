import Dog from "../../../models/data.js";
import sequelize from "../../../config/dbconfig.js";
export const data = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;

    const age = req.body.age;
    const datatocreate = {
      name: name,
      age: age,
      email: email,
    };
    const newdata = await Dog.create(datatocreate);
    return res.status(200).json({ message: "success", data: newdata });
  } catch (err) {
    console.error(err);
  }
};
