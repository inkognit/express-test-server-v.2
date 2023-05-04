import express from 'express';

import { sign_in_controller, sign_up_controller } from './controller.user';

const routers = express.Router();

routers.post('/sign_up', sign_up_controller);
routers.post('/sign_in', sign_in_controller);

module.exports = routers;
