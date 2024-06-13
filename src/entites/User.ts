import { uuid } from "uuidv4";
// vai ser tipo uma model
export class User {
    public readonly id : string;

    public name:string;
    public email:string;
    public password:string;

    // id opcional caso não precise criar um usuário
    constructor(props: Omit<User, 'id'>, id?: string){
        //pega todas as props e passa pro this
        Object.assign(this,props)

        if(!id){
            this.id = uuid()
        }
    }
}