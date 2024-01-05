const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false
      },
    duration: {
        type: DataTypes.ENUM("1 hrs",
        "2 hrs",
        "3 hrs",
        "4 hrs",
        "5 hrs",
        "6 hrs",
        "7 hrs",
        "8 hrs",
        "9 hrs",
        "10 hrs",
        "11 hrs",
        "12 hrs",
        "13 hrs",
        "14 hrs",
        "15 hrs",
        "16 hrs",
        "17 hrs",
        "18 hrs",
        "19 hrs",
        "20 hrs",
        "21 hrs",
        "22 hrs",
        "23 hrs",
        "24 hrs"),
        allowNull: false
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: false
      }
  }, {timestamps: false, freezeTableName: true});
};
  