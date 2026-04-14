import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ unique: true, length: 14 })
  @ApiProperty({ example: '123.456.789-00' })
  cpf: string;

  @Column({ length: 150 })
  @ApiProperty({ example: 'João da Silva' })
  nome: string;

  @Column({ length: 255 })
  @ApiProperty({ example: 'Rua das Flores, 123' })
  endereco: string;

  @Column({ length: 9 })
  @ApiProperty({ example: '01310-100' })
  cep: string;

  @Column({ length: 100 })
  @ApiProperty({ example: 'São Paulo' })
  cidade: string;

  @CreateDateColumn()
  @ApiProperty()
  criadoEm: Date;
}
