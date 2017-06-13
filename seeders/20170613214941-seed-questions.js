'use strict';

const faker = require('faker');
// const models = require('../models');
// ð use destructuring to grab Question
// property from the model object ð
const { Question } = require('../models');

// ð Array.from({length: 100}) creates an
// containing 100 empty elements
const questions = Array.from({length: 100})
  .map(() => {
    // Question.create and all sequelize query
    // methods return a promise. This means that we don't create
    // any to use them.
    return Question.create({
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      description: faker.hacker.phrase()
    });
  });

module.exports = {
  up: function (queryInterface, Sequelize) {
    // models.Question
    return Promise.all(questions);
  },

  down: function (queryInterface, Sequelize) {
    return Question.destroy({where: {}});
  }
};
