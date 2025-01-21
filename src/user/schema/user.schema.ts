import { Registration } from "src/registrations/schema/Registration";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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
   
    @Column({type:'varchar',nullable:false})
    isAdmin:string;

    @OneToMany(()=>Registration,(registration)=>registration.userId)
    @JoinColumn({name:'userId'})
    userRegistrations: Registration
    

}