import { Users } from 'src/user/schema/user.schema';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


export class Registration{

    @PrimaryGeneratedColumn()
    registrationId:number;


    @ManyToOne(()=>Users,(users)=>users.userRegistrations)
    @JoinColumn({name:'eventId'})
    eventId:Event;
 
    @ManyToOne(()=>Users,(user)=> user.userRegistrations)
    @JoinColumn({name:'userId'})
    userId:Users;
    

    @Column({type:'date',nullable:false})
    registrationDate:Date;

    @Column({type:'varchar',nullable:false})
     status:string;
}