module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define(
    "Parent",
    {
      parent_name: DataTypes.STRING,
    },
    {}
  );
  Parent.associate = function (models) {
    Parent.hasMany(models.Child, {
      foreignKey: "p_id",
      as: "children",
    });
  };
  return Parent;
};
