import 'reflect-metadata';
import { classToPlain, Transform, Exclude } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, ValidateIf } from 'class-validator';
import { ExcludeIf, TransformIfDefined } from 'src/decorators/ExcludeIf';

export class ExampleClass {
  @IsBoolean()
  public remove!: boolean;

  @IsString()
  @ExcludeIf<ExampleClass>((obj) => !!obj.remove, { ignoreValidation: true })
  @TransformIfDefined(({ value }) => String(value).toLowerCase())
  public name!: string;
}
