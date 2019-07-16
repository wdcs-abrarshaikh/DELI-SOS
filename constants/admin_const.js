http_codes = {
    badRequest: 400,
    internalError: 500,
    created: 201,
    notFound: 404,
    ok: 200,
    notImplemented: 501,
    forbidden: 403,
    unAuthorized:401
}

messages = {
    emailAlreadyRegistered: 'Email already registered',
    internalServerError: 'Internal server error',
    registered: 'Successfully registered',
    invalidEmailPass: 'Invalid email or password, Email_format:standard email format. Password_format: Min 8 Alphanumeric required',
    adminNotFound: 'No such admin is registered',
    loggedIn: 'Successfully logged in',
    invalidPassword: 'Invalid password',
    emailNotFound: 'No such email is registered',
    mailNotSent: 'Something went wrong while sending mail',
    ok: 'Ok',
    userNotFound: 'Unable to find user.',
    invalidBody: 'Invalid input',
    invalidToken: 'Invalid token',
    updated: 'Updated',
    imageUploaded: "Image uploaded successfully",
    userDelete: "User Deleted successfully",
    noMealOffer: "No offers",
    noCuisin: "No cuisin found",
    restRequestSent: "Add restaurant request sent to the admin",
    restAddSucessfully: "Successfully created restaurant.",
    restNotFound: "No such restuarant is registered",
    imageDeleted: "Image deleted successfully",
    reviewAdded: "Review added successfully",
    reviewNotFound: "No such review is posted",
    deleted: "Successfully deleted",
    addedToFavourites: "Successfully added to favourites",
    removeFromFavourites: "Successfully removed from favourites",
    profileUpdated: "Profile successfully updated",
    wrongPassword: "You entered wrong old password",
    passwordChanged: "Password changed successfully",
    invalidLatLong: "Please check your lat long and try again.",
    idMissing: "Please provide user id.",
    noPendingRestaurant: "There is no pending restaurant",
    reviewsNotFound: "No reviews Found",
    followed: "Followed user successfully",
    unfollowed: "Unfollwed user successfully",
    locationChanged: "Location successfully changed",
    contentSaved: "Content saved successfully",
    contentNotFound: "Content not found",
    contentDel: "Content deleted successfully",
    resolved: "Resolved successfully",
    noMatchFound: "No match found",
    cuisinDeleted: "Cuisin deleted successfully",
    cuisinAdded: "Cuisin added successfully",
    restDel: "Restaurant deleted successfully",
    aboutUsAdded: "AboutUs already added",
    aboutUsNotFound: "AboutUs not found",
    privacyPolicyAdded: "Privacy Policy already added",
    cuisinUpdated: "Cuisin updated successfully",
    privacyPolicyUpdated: "Privacy Policy updated successfully",
    aboutUsUpdated: "AboutUs updated successfully",
    restReqDeclined: "Restaurant approval rejected succssfully",
    alreadyUploadPhotos: "Sorry, you already post photos for this restaurant",
    contactReqSent: "Contact request sent to the admin.",
    likedReview: "Review successfully liked",
    unlikedReview: "Review successfully unliked",
    loggedout:'Loggedout successfully',
    tokenExpired:'Token expired',
    deactivatedUser:'Your account is deactivated by admin,please contact admin for further process.'
}

roles = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

schemas = {
    users: 'users',
    restaurants: 'restaurants',
    reviews: 'reviews',
    notifications: 'notifications',
    about: 'about_Privacy'
}

status = {
    active: "ACTIVE",
    inactive: "INACTIVE",
    pending: "PENDING",
    resolved: "RESOLVED"
}

criteria = {
    worst: 'WORST',
    bad: 'BAD',
    okay: 'OKAY',
    good: 'GOOD',
    great: 'GREAT'
}

mealTypes = {
    breakfast: 'BREAKFAST',
    lunch: 'LUNCH',
    dinner: 'DINNER',
    all: 'ALL'
}

Type = {
    about: 'About_Us',
    privacy: 'Privacy_Policy',
    contact: 'Contact_Us'
}

notificationsTypes = {
    reviewPosted: 'reviewPosted',
    reviewLiked: 'reviewLiked',
    follow: 'follow',
    followedBack: 'followedBack'
}

module.exports = {
    http_codes,
    messages,
    roles,
    schemas,
    status,
    criteria,
    mealTypes,
    Type,
    notificationsTypes
}