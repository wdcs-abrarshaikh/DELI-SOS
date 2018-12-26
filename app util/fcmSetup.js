var FCM = require('fcm-push');
var serverkey = 'AAAAYZPE2Nk:APA91bHG6GW4srikju5qMHCLlK1HzXB25QGaCcMBoe4IKksOJDwop_RujrhW3Htir3HmTGv8MeOrq5brLOw67dmtccXzXFL1VATGz9Y_WbrXzWX5zln5bx-cGZ8RMdBTWBYHtFMe7x5Q';
var fcm = new FCM(serverkey);

function createModel(to, data, title, body) {

    var message;
    message = {
        //to: 'dS7GEv3GHeo:APA91bET57pBuH_H6WcVEAHPi9yN9wC5WAodyq_43Su5FBQJaQ22u5PH_jn7llPhwqR0tsJpqR4u7Yf9_X3itS8WZoiUDwEnXHea-pZD7sVdQrJooxKgaMOx3bOYtxBwPIuDzkZ1bVX9',
        // to:'fPOylBXuAtg:APA91bEZ8aKVAMDV52ZwnnERLNliTj5NH56XXNzwTlyODpyr3Vo4J6qbJB0pzH2qOjG7qBwF2YChfpUsfZdDoyubg7sOh5cHtm2dIAovZnOd2GEpXVYZfIFU_0r2UORGSmWjbtj7PIKy',
        to:to,
        data: data
    };

    message.notification = {
        title: title,
        body: body,
        sound: "default"
    }
    return message;
}


function sendMessage(to, message, title, data) {
    let modifyedResult = createModel(to, data, title, message);
    fcm.send(modifyedResult, function (err, response) {
        if (err) {
            console.log("Something has gone wrong !");
        } else {
            console.log("Successfully sent with resposne :", response);
        }
    });
}

module.exports = {
    sendMessage
}