import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

 
 @Entity({name: 'tb_postagens'})
 export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id : number; 

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty()
    @UpdateDateColumn()
    data: Date;

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
      onDelete: "CASCADE"
  })
  tema: Tema
     usuario: any;

 } 

