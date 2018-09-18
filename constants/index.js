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
    invalidBody: 'Invalid request body',
    invalidToken: 'Invalid token',
    updated: 'Updated',
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
module.exports = {
    http_codes,
    messages,
    roles,
    schemas
}