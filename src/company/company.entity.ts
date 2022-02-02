import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn() 
  id: number;

  @ApiProperty() 
  @Column() 
  name: string;

  @ApiProperty()
  @Column() 
  rating: number;
  
  @ApiProperty() 
  @Column() 
  description: string;
}