// informa quais os campos necessarios para criacao de um usuario

export interface ICreateUserRequestDTO {
    name : string;
    email : string;
    password : string;
}