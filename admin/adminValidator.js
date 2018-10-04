var jwt = require('jsonwebtoken')
var admincnfg = require('./adminConfig')
var code = require('../constants').http_codes;
var msg = require('../constants').messages;

function validateSignUp(req, res, next) {
    if (req.body.name && req.body.password && req.body.email) {
        var name = req.body.name.trim(),
            email = req.body.email.trim(),
            password = req.body.password.trim();

        if (name && email && password) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateLogin(req, res, next) {
    if (req.body.password && req.body.email) {
        let email = req.body.email.trim(),
            password = req.body.password.trim();
        if (email && password) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}
// function validateSocialLogin(req, res, next) {
//     if (req.body.name && req.body.isSocialLogin && req.body.socialId) {
//         let name = req.body.name.trim(),
//             socialId = req.body.socialId.trim()
//         isSocialLogin = req.body.isSocialLogin
//         if (name && isSocialLogin == true && socialId) {
//             next();
//         }
//         else {
//             return res.json({ code: code.badRequest, message: msg.invalidBody })
//         }
//     }
//     else {
//         return res.json({ code: code.badRequest, message: msg.invalidBody })
//     }
// }
async function verifyAdminToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, admincnfg.secret, (err) => {
        if (err) {
            return res.json({ code: code.badRequest, message: msg.invalidToken })
        }
        else {
            next();
        }
    })
}

async function validateBody(req, res, next) {
    let data = req.body
    let flag = false
    if (!data) {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
    else {
        for (let k in data) {
            if (typeof (data[k]) === 'object') {
                for (let j in data[k]) {
                    if (!data[k][j].trim()) {
                        flag = true;
                    }
                }
            }
            else if (typeof (data[k]) === 'array') {
                if (data[k].length == 0) {
                    flag = true;
                }
            }
            else {
                if (!data[k].trim()) {
                    flag = true;
                }
            }
        }
        if (flag == true) {
            res.json({ code: code.badRequest, message: msg.invalidBody })
        }
        else {
            next();
        }
    }
}


function validateRestaurant(req, res, next) {
    let rest = req.body
    //function to check whether the array is empty or not
    function isEmpty(arr) {
        for (var key in arr) {
            if (arr.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    if (rest.name && rest.description && rest.latitude &&
        rest.longitude && rest.cuisin && rest.openTime &&
        rest.closeTime && rest.menu) {

        let name = rest.name.trim(),
            description = rest.description.trim(),
            latitude = rest.latitude.trim(),
            longitude = rest.latitude.trim(),
            openTime = rest.openTime.trim(),
            closeTime = rest.closeTime.trim()
        
        len = rest.cuisin
        cusinlen = len.length;
            if(cusinlen==0){ return res.json({ code: code.badRequest, message: msg.invalidBody })}//if array is empty then return bcoz its required
        cuisin = (!isEmpty(rest.cuisin))
        let i = 0
        do {
            if (cuisin) {//if array is not empty then trim insides string
                
                let cname = rest.cuisin[i].name.trim(),
                    image = rest.cuisin[i].image.trim()
                    // console.log("cnm",cname)
                i++;
                if (cname && image) {
                    cuisin = true;
                }
                else {
                    cuisin = false;
                    break;
                }

            }
        } while (i < cusinlen)


        
        // console.log("array length", cusinlen)

        if (name && description && latitude && longitude && openTime && closeTime && cuisin) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }


    }
    else { return res.json({ code: code.badRequest, message: msg.invalidBody }) }
}


module.exports = {
    validateSignUp,
    validateLogin,
    verifyAdminToken,
    validateBody,
    // validateSocialLogin,
    validateRestaurant
}