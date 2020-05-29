module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Children", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      child_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      at_home: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      p_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        reference: {
          model: "Parents",
          key: "id",
          as: "p_id",
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Children");
  },
};
