import { User } from "../../entites/User";
import { IUsersRepositorys } from "../IUserRepository";

export class PostgresUserRepository implements IUsersRepositorys {
    // como nao tem banco, salvamos nessa variavel
    private users : User[] = [];
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email == email)
        return user;
    }
    async save(user : User): Promise<void>{
        this.users.push(user)
    }
}