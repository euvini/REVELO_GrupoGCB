import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class creatMembers1615586869181 implements MigrationInterface {
//Criação da tabela com os dados dos médicos e acrescentando ID e Data de criação
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Members",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "crm",
                        type: "varchar",
                    },
                    {
                        name: "Telephone",
                        type: "varchar",
                    },
                    {
                        name: "Cellphone",
                        type: "varchar",
                    },
                    {
                        name: "cep",
                        type: "varchar",
                    },
                    {
                        name: "specialty",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Members");
    }

}
