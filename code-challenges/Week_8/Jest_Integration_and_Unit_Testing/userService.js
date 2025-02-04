class UserService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getUserData(userId) {
        try {
            const response = await fetch(`${this.apiUrl}/users/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = UserService;
