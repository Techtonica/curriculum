const UserService = require('./userService');

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUserData(userId) {
        return this.userService.getUserData(userId);
    }
}

module.exports = UserController;
