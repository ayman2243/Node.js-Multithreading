//
// Author: 
//  Ayman Aljohary - ayman2243@gmail.com / 01201035118
//

var CROS = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,access-token');
    next();
};

module.exports = { CROS }