const { Parent, Child } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const parent = await Parent.create({
        parent_name: req.body.parent_name,
      });
      return res.status(201).send(parent);
    } catch (e) {
      console.log("[create] error:", e);
      return res.status(500).send(e);
    }
  },
  async list(req, res) {
    try {
      const parents = await Parent.findAll({
        include: [
          {
            model: Child,
            as: "children",
          },
        ],
      });
      return res.status(200).send(parents);
    } catch (e) {
      console.log("[list] error:", e);
      return res.status(500).send(e);
    }
  },
  async retrieve(req, res) {
    try {
      const parent = await Parent.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Child,
            as: "children",
          },
        ],
      });
      if (!result) {
        return res.status(404).send({ message: "Parent name not found" });
      }
      return res.status(200).send(parent);
    } catch (e) {
      console.log("[retrieve] error:", e);
      return res.status(500).send(e);
    }
  },
  async update(req, res) {
    try {
      const searchedParent = await Parent.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Child,
            as: "children",
          },
        ],
      });
      if (!searchedParent) {
        return res.status(404).send({ message: "Parent id not found" });
      }
      const updatedParent = await searchedParent.update(
        { parent_name: req.body.parent_name },
        {
          returning: true,
          where: { id: req.params.id },
        }
      );
      return res.status(200).send(updatedParent);
    } catch (e) {
      console.log("[update] error:", e);
      return res.status(500).send(e);
    }
  },
  async delete(req, res) {
    try {
      const searchedParent = await Parent.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Child,
            as: "children",
          },
        ],
      });
      if (!searchedParent) {
        return res.status(404).send({ message: "Parent id not found" });
      }
      await searchedParent.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).send({ message: "Parent has been deleted" });
    } catch (e) {
      console.log("[update] error:", e);
      return res.status(500).send(e);
    }
  },
};
