/* eslint-disable prettier/prettier */
/*
 * Title: SAmple Handlers
 * Description: SAmple Handlers
 * Author: Rihan sharif raju
 * Date: 26/03/2023
 *
 */
// modulescaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: 'this is sample url',
  });
};

module.exports = handler;
