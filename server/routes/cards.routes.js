const Router = require("express");
const cardInfo = require("../mock-items");
const CardsSchema = require("../models/Cards-schema");
const router = new Router();

router.get("/cards", async (req, res) => {
  const result = await CardsSchema.find({});
  return res.json(result);
});

router.post("/cards", async (req, res) => {
  const card = {
    headline: "Spring Integration",
    description:
      "Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.",
    ids: 8,
    img: "http://localhost:5050/images/spring-integration.svg",
  };

  let val = await new CardsSchema(card).save();
  res.json(val);
});

module.exports = router;
