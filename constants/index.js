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
    invalidEmailPass: 'Invalid email or password, Email_format:standard email format. Password_format eg.: Superm@n123',
    adminNotFound: 'No such admin is registered',
    loggedIn: 'Logged in',
    invalidPassword: 'Invalid password',
    emailNotFound: 'No such email is registered',
    mailNotSent: 'Something went wrong while sending mail',
    ok:'Ok',
    userNotFound: 'No such user found',
    invalidBody: 'Invalid input',
    invalidToken: 'Invalid token',
    updated: 'Updated',
    imageUploaded: "Image uploaded successfully",
    restRequestSent:"Add restaurant request sent to the admin",
    restNotFound:"No such restuarant is registered",
    imageDeleted:"Image deleted successfully",
    reviewAdded:"Review added successfully",
    reviewNotFound:"No such review is posted",
    deleted:"Successfully deleted",
    addedToFavourites: "Successfully added to favourites",
    removeFromFavourites: "Successfully removed from favourites",
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
    inactive: "INACTIVE",
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
    breakfast : 'BREAKFAST',
    lunch : 'LUNCH',
    dinner:'DINNER',
    all : 'ALL'
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