/* eslint-disable prettier/prettier */
/*
 * Title: Not Found  Handlers
 * Description: 404 not found Handler
 * Author: Rihan sharif raju
 * Date: 26/03/2023
 *
 */
// modulescaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, { message: 'url are not found' });
};

module.exports = handler;
