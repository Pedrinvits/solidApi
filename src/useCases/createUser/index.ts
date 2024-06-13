// conecta a implementacao do postgres com as interfaces (useCases)

import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider"
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository"
import { CreateUserController } from "./createUserController"
import { CreateUserUseCase } from "./createUserUseCases"

const mailtrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController (
    createUserUseCase
)

export { createUserUseCase, createUserController}

