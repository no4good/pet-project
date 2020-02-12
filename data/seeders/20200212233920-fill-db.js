import { usersSeed } from "../seed-data/users.seed";

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Add users.
      const usersMappedSeed = usersSeed.map((user, i) => ({
        ...user
      }));
      await queryInterface.bulkInsert("users", usersMappedSeed, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: async queryInterface => {
    try {
      await queryInterface.bulkDelete("users", null, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  }
};
