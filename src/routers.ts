import express from 'express';

import { auth_guard } from './middlewares/session.middleware';

const routers = express.Router();
const usersRouters = require('./modules/users/routers.user');
const blogsRouters = require('./modules/blogs/routers.blog');

routers.use('/', usersRouters);
routers.use('/blogs', auth_guard, blogsRouters);

module.exports = routers;
