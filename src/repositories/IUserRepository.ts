// interface que define como o nosso repository vai ser

import { User } from "../entites/User";

export interface IUsersRepositorys {
    // define quais métodos vão estar nesse repository
    
    findByEmail(email : string): Promise<User>
    // salve no bd mas não retorna nada
    save(user : User): Promise<void>
}