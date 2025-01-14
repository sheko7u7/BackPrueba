import { Type } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsString, IsOptional, IsNumber, IsInt } from 'class-validator';

export class CreateAlumnoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido_paterno: string;

  @IsNotEmpty()
  @IsString()
  apellido_materno: string;

  @IsNotEmpty()
  @IsString()
  num_control_escolar: string;

  @IsNotEmpty()
  @IsEmail()
  correo_electronico: string;

  @IsNotEmpty()
  @IsString()
  num_telefono: string;

  @IsOptional()
  @IsString()
  imagen_perfil: string;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  grupoId: number;

}
