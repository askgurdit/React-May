import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite"; // Corrected import from "ID" to "ID" for consistency

export class AuthService {
    client = new Client(); // Corrected initialization to lowercase 'client'
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const userAccount = await this.account.create(ID.unique(), email, password, name); // Corrected ID to ID for consistency
        if (userAccount) {
            // call another method
            return this.login({ email, password });
        } else {
            return userAccount;
        }
    }

    async login({ email, password }) {
        return this.account.createEmailPasswordSession(email, password);
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
            return null; // Ensure a consistent return type
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }
}

export default new AuthService(); // Exporting as a singleton instance

