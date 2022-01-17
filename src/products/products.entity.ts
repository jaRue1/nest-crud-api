import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn() 
  id: number;

  @ApiProperty()
  @Column() 
  title: string;

  @ApiProperty()
  @Column() 
  description: string;

  @ApiProperty()
  @Column() 
  price: string;

  @ApiProperty()
  @Column() 
  inStock: boolean;

}