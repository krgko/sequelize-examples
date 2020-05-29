const { Child } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const child = await Child.create({
        child_name: req.body.child_name,
        p_id: req.params.p_id,
      });
      return res.status(201).send(child);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async update(req, res) {
    console.log({
      id: req.params.id,
      p_id: req.params.p_id,
    });
    try {
      const searchedChild = await Child.findOne({
        where: {
          id: req.params.id,
          p_id: req.params.p_id,
        },
      });
      if (!searchedChild) {
        return res.status(404).send({ message: "Parent id not found" });
      }
      // Just change at_home to true
      const child = await searchedChild.update(
        {
          child_name: req.body.child_name || searchedChild.child_name,
          at_home: Boolean(req.body.at_home) || searchedChild.at_home,
        },
        {
          returning: true,
          where: {
            id: req.params.id,
            p_id: req.params.p_id,
          },
        }
      );
      return res.status(200).send(child);
    } catch (e) {
      console.log("[update] error:", e);
      return res.status(500).send(e);
    }
  },
  async delete(req, res) {
    try {
      const searchedChild = await Child.findOne({
        where: {
          id: req.params.id,
          p_id: req.params.p_id,
        },
      });
      if (!searchedChild) {
        return res.status(404).send({ message: "Child id not found" });
      }
      await searchedChild.destroy({
        where: {
          id: req.params.id,
          p_id: req.params.p_id,
        },
      });

      return res.status(204).send();
    } catch (e) {
      console.log("[update] error:", e);
      return res.status(500).send(e);
    }
  },
};
