//keys.js figure what to return 
if (process.env.NODE_ENV === 'production') {
    //we are in production return prod 
    module.exports = require('./prod');
} else {
    //we are in dev return dev
    module.exports = require('./dev');
}
