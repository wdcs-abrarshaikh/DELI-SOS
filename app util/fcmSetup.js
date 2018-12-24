var FCM = require('fcm-push');
var serverkey = process.env.firebase_serverKey;  
var fcm = new FCM(serverkey);

function createModel(type,to,data,title,body){

    var message;
    message ={  
        to : 'AAAAYZPE2Nk:APA91bHG6GW4srikju5qMHCLlK1HzXB25QGaCcMBoe4IKksOJDwop_RujrhW3Htir3HmTGv8MeOrq5brLOw67dmtccXzXFL1VATGz9Y_WbrXzWX5zln5bx-cGZ8RMdBTWBYHtFMe7x5Q',
        collapse_key : 'AIzaSyAwAw1eQlNVdGphMDS_zNLRDppcbpdVskw',
        data : data,  
    };


    if(type === 'ios'){
        message.notification = {
            title : title,
            body : body
        }
    }

    return message;
}




function sendMessage(type,to,message,title,data){
    let modifyedResult = createModel(to,data,title,message);
    fcm.send(modifyedResult, function(err,response){  
        if(err) {
            console.log("Something has gone wrong !");
        } else {
            console.log("Successfully sent with resposne :",response);
        }
    });
}

module.exports = {
    sendMessage
}