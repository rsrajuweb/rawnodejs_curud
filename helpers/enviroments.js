/* eslint-disable prettier/prettier */
//  * Title: enviroments
//  * Description: Handle Resquest and response
//  * Author: Rihan Sharif Raju
//  * Date: 4/04/2023
//  *

const enviroments = {};

enviroments.staging = {
  port: 3000,
  envName: 'staging',
};

enviroments.production = {
  port: 5000,
  envName: 'production',
};

// determine whinch enviroment pass
const currentEnviroment =
  typeof process.env.NODE_ENV === 'staging'
    ? process.env.NODE_ENV === 'staging'
    : 'staging';

const enviromentToexport =
  typeof enviroments[currentEnviroment] === 'object'
    ? enviroments[currentEnviroment]
    : enviroments.staging;

module.exports = enviromentToexport;
