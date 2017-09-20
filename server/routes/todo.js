import config from '../../config';
import renderUtil from '../lib/renderUtil.js';
import request from 'request';
export default (app) => {
  app.get('/todo/*', (req, res, next) => {
    const context = {};
    renderUtil.serverRender(res, 'todo', context, 1, 2);
  });
};
