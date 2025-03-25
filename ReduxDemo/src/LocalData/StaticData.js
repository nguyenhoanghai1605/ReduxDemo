export default class StaticData {
    constructor() {}

    static _currentUser = null;

    static getCurrentUser() {
        return StaticData._currentUser;
    }

    static setCurrentUser(user) {
        StaticData._currentUser = user;
    }
}