const sequelize = require('../config/connection');
const { Profile } = require('../models');

const profiledata = [
  {
    profilename: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    age: 33,
    height: 72,
    start: 210,
    goal: 225,
    password: 'password123'
  },
  {
    profilename: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    age: 17,
    height: 60,
    start: 95,
    password: 'password123'
  },
  {
    profilename: 'iboddam2',
    email: 'cstoneman2@last.fm',
    age: 46,
    height: 66,
    start: 140,
    goal: 135,
    password: 'password123'
  },
  {
    profilename: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    age: 55,
    height: 70,
    start: 286,
    goal: 260,
    password: 'password123'
  },
  {
    profilename: 'djiri4',
    email: 'gmidgley4@weather.com',
    age: 35,
    height: 74,
    start: 265,
    goal: 265,
    password: 'password123'
  },
  {
    profilename: 'msprague5',
    email: 'larnout5@imdb.com',
    age: 23,
    height: 72,
    start: 180,
    password: 'password123'
  },
  {
    profilename: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    age: 29,
    height: 64,
    start: 105,
    goal: 95,
    password: 'password123'
  },
  {
    profilename: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    age: 39,
    height: 68,
    start: 145,
    goal: 140,
    password: 'password123'
  },
  {
    profilename: 'msabbins8',
    email: 'lmongain8@google.ru',
    age: 24,
    height: 68,
    start: 210,
    goal: 155,
    password: 'password123'
  },
  {
    profilename: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    age: 40,
    height: 66,
    start: 154,
    goal: 135,
    password: 'password123'
  }
];

const seedProfiles = () => Profile.bulkCreate(profiledata, {individualHooks: true});

module.exports = seedProfiles;
