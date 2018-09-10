function check(req, res, next) {
    console.log("body",req.body)
    var firstName = req.body.firstName;
    var email = req.body.email;
    var password = req.body.password;
    if (firstName && email && password) {
        next();
    }
    else {
        return res.json({ code: 406, message: "invalid request body" })
    }
}
function validateEmail(data) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(data)
}
module.exports = {
    check,
    validateEmail
}