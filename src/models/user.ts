import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


//entidade de usuários onde foi criado a classe e formatos das variáveis
@Entity("Members")

class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name:string;

    @Column()
    crm:number;

    @Column()
    telephone:string;

    @Column()
    cellphone:string;

    @Column()
    cep:string;

    @Column()
    specialty:string;

    @CreateDateColumn()
    created_at:Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { User };