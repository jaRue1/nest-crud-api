import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty() // allows you to see the shape of the schema (check swagger docs for more)
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;
}