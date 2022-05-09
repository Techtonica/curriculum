const controller = require("../../controller/speciesController");
const model = require("../../models/species");
jest.mock("../../models/species");

describe("Species controller", () => {
  test("getAllSpecies", async () => {
    const data = [
      {
        name: "smokey",
      },
      {
        name: "monkey",
      },
    ];
    model.getAllSpecies.mockResolvedValue(data);

    await expect(controller.getAllSpecies());
  });
});
