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
    emailAlreadyRegistered: 'Correo electrónico ya registrado',
    internalServerError: 'Error de servidor interno',
    registered: 'Registrado exitosamente',
    invalidEmailPass: 'Correo electrónico o contraseña no válidos, Formato de correo electrónico: formato de correo electrónico estándar. Formato de contraseña: Min. 8 Alfanumérico requerido',
    adminNotFound: 'No hay tal administrador registrado',
    loggedIn: 'Ha iniciado sesión correctamente',
    invalidPassword: 'Contraseña invalida',
    emailNotFound: 'No se ha registrado dicho correo',
    mailNotSent: 'Algo salió mal al enviar correo',
    ok: 'De acuerdo',
    userNotFound: 'No se puede encontrar usuario',
    invalidBody: 'Entrada inválida',
    invalidToken: 'Simbolo no valido',
    updated: 'Actualizado',
    imageUploaded: "Imagen cargada exitosamente",
    userDelete: "Usuario eliminado correctamente",
    noMealOffer: "No hay ofertas",
    noCuisin: "No se encontró cocina",
    restRequestSent: "Añadir solicitud de restaurante enviado al administrador",
    restAddSucessfully: "Restaurante exitosamente creado",
    restNotFound: "No se ha registrado tal restaurante",
    imageDeleted: "Imagen eliminada exitosamente",
    reviewAdded: "Revisión agregada exitosamente",
    reviewNotFound: "No se ha publicado dicha revisión",
    deleted: "Eliminado exitosamente",
    addedToFavourites: "Agregado exitosamente a los favoritos",
    removeFromFavourites: "Eliminado con éxito de los favoritos",
    profileUpdated: "Perfil actualizado correctamente",
    wrongPassword: "Has introducido una contraseña antigua incorrecta",
    passwordChanged: "Contraseña cambiada con éxito",
    invalidLatLong: "Por favor revisa tu tiempo y vuelve a intentarlo",
    idMissing: "Por favor proporcione identificación de usuario",
    noPendingRestaurant: "No hay restaurante pendiente",
    reviewsNotFound: "No se encontraron comentarios",
    followed: "Usuario seguido correctamente",
    unfollowed: "Usuario no cumplido exitosamente",
    locationChanged: "Ubicación cambiada exitosamente",
    contentSaved: "Contenido guardado exitosamente",
    contentNotFound: "contenido no encontrado",
    contentDel: "Contenido eliminado exitosamente",
    resolved: "Resuelto exitosamente",
    noMatchFound: "No se encontraron coincidencias",
    cuisinDeleted: "Cocina eliminada exitosamente",
    cuisinAdded: "Cocina agregada exitosamente",
    restDel: "Restaurante eliminado exitosamente",
    aboutUsAdded: "AboutUs ya añadido",
    aboutUsNotFound: "AboutUs no encontrado",
    privacyPolicyAdded: "Política de privacidad ya agregada",
    cuisinUpdated: "Cocina actualizada con éxito",
    privacyPolicyUpdated: "Política de privacidad actualizada exitosamente",
    aboutUsUpdated: "AboutUs actualizado con éxito",
    restReqDeclined: "Aprobación exitosa del restaurante",
    alreadyUploadPhotos: "Lo sentimos, ya has publicado fotos para este restaurante",
    contactReqSent: "Solicitud de contacto enviada al administrador",
    likedReview: "Revisar con éxito me gustó",
    unlikedReview: "Revisar con éxito desemejado",
    loggedout:'Cierre de sesión con éxito',
    tokenExpired:'Token caducado',
    deactivatedUser:'Su cuenta está desactivada por el administrador, póngase en contacto con el administrador para continuar el proceso'
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