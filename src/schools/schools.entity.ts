import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Schools {
  @PrimaryGeneratedColumn() 
  id: number;

  @ApiProperty()
  @Column() 
  name: string;

  @ApiProperty()
  @Column() 
  description: string;

  @ApiProperty()
  @Column() 
  rating: number;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  zipCode: number;

}

