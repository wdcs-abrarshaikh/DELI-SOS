var FCM = require('fcm-push');
var serverkey = process.env.firebase_serverKey;  
var fcm = new FCM(serverkey);

function createModel(type,to,data,title,body){

    var message;
    message ={  
        to : 'cLhzc8DfPPQ:APA91bHtEd8Yp1yq1vf3nde0SSGvLHWM4ZcxRp_bDmGzcBPU9gCwm8BIqqv4OD9bUEM0msz6ngi8B3Aj7aqsX4-Za1M-N3SuTPmqX3QSdEpus1LkShvvEZPLJbpZOdKBs4YcLfFF8_lr',
        // collapse_key : '<insert-collapse-key>',
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