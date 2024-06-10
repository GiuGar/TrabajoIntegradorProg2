const db = require('../database/models');
const { body } = require("express-validator");
const bcrypt = require('bcryptjs');

const newMovieValidation = []