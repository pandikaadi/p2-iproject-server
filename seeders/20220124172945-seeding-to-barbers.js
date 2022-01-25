'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Barbers', 
   [
    {
     name: `Tatang`,
     city: `Bandung`,
     lat: -6.925742,
     long: 107.700402
   },
    {
     name: `Engkus`,
     city: `Bandung`,
     lat: -6.928170,
     long: 107.644381
   },
    {
     name: `Dono`,
     city: `Bandung`,
     lat: -6.910634,
     long: 107.601046
   },
    {
     name: `Nandang`,
     city: `Bandung`,
     lat: -6.942799,
     long: 107.600628
   },
    {
     name: `Aang`,
     city: `Bandung`,
     lat: -6.899721,
     long: 107.575724
   },
    {
     name: `Deden`,
     city: `Bandung`,
     lat: -6.878569,
     long: 107.596959
   },
    {
     name: `Ajat`,
     city: `Bandung`,
     lat: -6.934632,
     long: 107.581202
   },
    {
     name: `Abdul`,
     city: `Jakarta`,
     lat: -6.191502,
     long: 106.919455
   },
    {
     name: `Adam`,
     city: `Jakarta`,
     lat: -6.283215,
     long: 106.857454
   },
    {
     name: `Doel`,
     city: `Jakarta`,
     lat: -6.164269,
     long: 106.838056
   },
    {
     name: `Fauzi`, 
     city: `Jakarta`,
     lat: -6.154508,
     long: 106.743468
   },
    {
     name: `Mandra`,
     city: `Jakarta`,
     lat: -6.230033,
     long: 106.772390
   },
    {
     name: `Ramli`,
     city: `Jakarta`,
     lat: -6.321931,
     long: 106.893677
   },
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Barbers', null, {})
  }
};
