var FCM = require('fcm-push');
var serverkey = process.env.firebase_serverKey;
var fcm = new FCM(serverkey);

function createModel(to, data) {

    var message;
    //passing title and message under data
    console.log(typeof data)
    // data.title = title
    // data.body = body
    message = {
        // to: 'dS7GEv3GHeo:APA91bET57pBuH_H6WcVEAHPi9yN9wC5WAodyq_43Su5FBQJaQ22u5PH_jn7llPhwqR0tsJpqR4u7Yf9_X3itS8WZoiUDwEnXHea-pZD7sVdQrJooxKgaMOx3bOYtxBwPIuDzkZ1bVX9',
        // to:'fPOylBXuAtg:APA91bEZ8aKVAMDV52ZwnnERLNliTj5NH56XXNzwTlyODpyr3Vo4J6qbJB0pzH2qOjG7qBwF2YChfpUsfZdDoyubg7sOh5cHtm2dIAovZnOd2GEpXVYZfIFU_0r2UORGSmWjbtj7PIKy',
        to:to,
        data: data
    };
    //
    // message.notification = {
    //   //commenting these two ,coz front want these two values to be pass inside the data object
    //     // title: title,
    //     // body: body,
    //     sound: "default"
    // }
    return message;
}


function sendMessage(to, message, title, data) {
  let {receiver,createdAt,_id,notificationType,reviewId,sender,restId} = data
  let updatedData = {receiver,createdAt,_id,notificationType,reviewId,sender,restId}
  updatedData.title = title;
  updatedData.body = message;
  //console.log("after change",updatedData)

    let modifyedResult = createModel(to, updatedData);
    //console.log({modifyedResult})

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
