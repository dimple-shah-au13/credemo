Requirements: 
    1. User must be able to register, login and logout using email and password. [Use api token for auth]
        Email must be valid.
        Password must be minimum 6 characters and max 10 characters.
        Adonis Installation - https://docs.adonisjs.com/guides/installation
        Adonis auth package - https://docs.adonisjs.com/guides/auth/introduction
        Api Token Setup - https://docs.adonisjs.com/guides/auth/api-tokens-guard
    2. Once user is logged in, user must be able to 
        a. Create a profile which will have his/her name, email address, gender, date of birth.
            Name must be of minimum 3 characters and maximum 30 characters.
            Mobile number.
            gender can be Either MALE or FEMALE only
            Date of birth must be a valid date.
        b. Update his/her profile. [Same rules as create]
        c. View his profile.
            Show user's name, email address, gender, mobile and date of birth only.
        d. Delete his profile.
        
        For this, create a User Model and Profile Model.
            Model - https://docs.adonisjs.com/guides/models/introduction
        Both models must have a created_at and updated_at field.
        User id must be the primary key and must be used as foreign key in Profile.
            Model Relation - https://docs.adonisjs.com/guides/models/relationships
    3. Routes should be registered seperately.
        Routing - https://docs.adonisjs.com/guides/routing
    4. Routes should be mapped to controllers.
        controllers - https://docs.adonisjs.com/guides/controllers
    5. Request data must be validated
        validations - https://docs.adonisjs.com/guides/validator/introduction
    6. Configure postgresql connection
        https://docs.adonisjs.com/guides/database/introduction
    7. Use Migration to create profile table
        https://docs.adonisjs.com/guides/database/migrations
    8. Crud Operations
        https://docs.adonisjs.com/guides/models/crud-operations
Route structure:
    post /login -> AuthController
    post /register -> AuthController
    post /logout -> AuthController
    get /user/profile -> ProfileController
    post /user/profile -> ProfileController
    put /user/profile -> ProfileController
    delete /user/profile -> ProfileController