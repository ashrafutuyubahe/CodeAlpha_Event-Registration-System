import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class Users{

    @PrimaryGeneratedColumn()
    userId:number;

    @Column({type:'varchar',nullable:false})
    userName:string;

    

    @Column({type:'varchar',nullable:false})
    userEmail:string;


    @Column({type:'varchar',nullable:false})
    userPassword:string;

    

}