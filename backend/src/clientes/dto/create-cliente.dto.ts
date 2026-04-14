import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: '123.456.789-00', description: 'CPF no formato 000.000.000-00' })
  @IsString()
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF deve estar no formato 000.000.000-00' })
  cpf: string;

  @ApiProperty({ example: 'João da Silva', description: 'Nome completo do cliente' })
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @Length(3, 150, { message: 'Nome deve ter entre 3 e 150 caracteres' })
  nome: string;

  @ApiProperty({ example: 'Rua das Flores, 123', description: 'Endereço completo' })
  @IsString()
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  endereco: string;

  @ApiProperty({ example: '01310-100', description: 'CEP no formato 00000-000' })
  @IsString()
  @IsNotEmpty({ message: 'CEP é obrigatório' })
  @Matches(/^\d{5}-\d{3}$/, { message: 'CEP deve estar no formato 00000-000' })
  cep: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade do cliente' })
  @IsString()
  @IsNotEmpty({ message: 'Cidade é obrigatória' })
  cidade: string;
}
