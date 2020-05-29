const { parents, children } = require("../controllers");

module.exports = (app) => {
  app.get("/healthz", (req, res) => {
    res.json({ health: "OK" });
  });

  app.put("/api/parents/:id", parents.update);
  app.put("/api/parents/:p_id/child/:id", children.update);

  app.delete("/api/parents/:id", parents.delete);
  app.delete("/api/parents/:p_id/child/:id", children.delete);

  app.post("/api/parents", parents.create);
  app.post("/api/parents/:p_id/child", children.create);

  app.get("/api/parents", parents.list);
  app.get("/api/parents/:id", parents.retrieve);
};
