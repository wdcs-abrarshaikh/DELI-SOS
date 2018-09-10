
var service = require('./userServices')


function signup(req,res){
    return service.createUser(req,res).then((result)=>{
        if(result){
            return result
        }
        else{
            return false
        }
    })
}
module.exports = {
    signup
    // 'signup': (req, res) => {
    //     service.createUser(req, res);
    // }
}