// Import user Model
import User from "../models/User.js";
import xml from "xml";
// Get all users
export const getDay = async (req, res) => {
  const day = +req.params.dayOfWeek;
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day > 7 || day < 1) {
    let data = `<?xml version="1.0" encoding="UTF-8"?>`;

    data += `<error>Invalid</error>`;

    res.header("Content-Type", "application/xml");
    res.status(404).send(data);
   
  } else {
    let data = `<?xml version="1.0" encoding="UTF-8"?>`;

    data += `<dayofWeek>${days[day - 1]}</dayofWeek>`;

    res.header("Content-Type", "application/xml");
    res.status(200).send(data);
  }
};

export const getMonth = async (req, res) => {
    const month = +req.params.monthOfYear;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (month > 12 || month < 1) {
      let data = `<?xml version="1.0" encoding="UTF-8"?>`;
  
      data += `<error>Invalid</error>`;
  
      res.header("Content-Type", "application/xml");
      res.status(404).send(data);
     
    } else {
      let data = `<?xml version="1.0" encoding="UTF-8"?>`;
  
      data += `<monthOfYear>${months[month - 1]}</monthOfYear>`;
  
      res.header("Content-Type", "application/xml");
      res.status(200).send(data);
    }
  };

// Get user by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(user[0]);
  } catch (err) {
    console.log(err);
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update user by id
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete user by id
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
