import { User } from "../../entites/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepositorys } from "../../repositories/IUserRepository";

import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository : IUsersRepositorys,
        private mailProvider : IMailProvider,
    ){

    }
    async execute(data : ICreateUserRequestDTO){
       const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

       if(userAlreadyExists) {
            throw new Error('User already exists.')
       } 
       const user = new User(data)
       
       await this.usersRepository.save(user)

       await this.mailProvider.sendMail({
            to: {
                name: 'asa',
                email: 'asd@sads.com',
            },
            from : {
                name : 'Equipe da empresa tal',
                email :'equipe@empresa.com',
            },
            subject : 'Seja Bem Vindo a plataforma',
            body : '<p>Você já pode fazer login em nossa plataforma-</p>'
       })
    }
}