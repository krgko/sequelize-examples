module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define(
    "Child",
    {
      child_name: DataTypes.STRING,
      at_home: DataTypes.BOOLEAN,
    },
    {}
  );
  Child.associate = function (models) {
    Child.belongsTo(models.Parent, {
      foreignKey: "p_id",
      onDelete: "CASCADE",
    });
  };
  return Child;
};
