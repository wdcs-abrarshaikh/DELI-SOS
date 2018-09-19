http_codes = {
    badRequest: 400,
    internalError: 500,
    created: 201,
    notFound: 404,
    ok: 200,
    notImplemented: 501
}

messages = {
    emailAlreadyRegistered: 'Email already registered',
    internalServerError: 'Internal server error',
    registered: 'Successfully registered',
    invalidEmailPass: 'Invalid email or password',
    adminNotFound: 'No such admin is registered',
    loggedIn: 'Logged in',
    invalidPassword: 'Invalid password',
    emailNotFound: 'No such email is registered',
    mailNotSent: 'Something went wrong while sending mail',
    ok: 'Ok',
    userNotFound: 'No such user found',
    invalidBody: 'Invalid input',
    invalidToken: 'Invalid token',
    updated: 'Updated',
    imageUploaded: "Image uploaded successfully",
    restRequestSent:"Add restaurant request sent to the admin"
}

roles = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

schemas = {
    users: 'users',
    restaurants: 'restaurants',
    reviews: 'reviews',
    notifications: 'notifications'
}

status = {
    active: "ACTIVE",
    inavtive: "INACTIVE",
    pending: "PENDING"
}

criteria = {
    worst: 'WORST',
    bad: 'BAD',
    okay: 'OKAY',
    good: 'GOOD',
    great: 'GREAT'
}

mealTypes = {
    breakfast : 'Breakfast',
    lunch : 'Lunch',
    dinner:'Dinner',
    all : 'All'
}

module.exports = {
    http_codes,
    messages,
    roles,
    schemas,
    status,
    criteria,
    mealTypes
}