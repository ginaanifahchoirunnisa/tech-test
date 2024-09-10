import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsInt,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  tasklist_name: string;

  @IsNotEmpty()
  @IsString()
  task_desc: string;

  @IsNotEmpty()
  @IsDateString()
  deadline: string ;

  @IsNotEmpty()
  @IsInt()
  task_status: number;
}
