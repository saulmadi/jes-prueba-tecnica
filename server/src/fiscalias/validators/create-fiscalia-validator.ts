import {CommandValidator, JoiCommandValidator,} from '../../common/commands/validation';
import {CreateFiscalia} from '../commands/create-fiscalia';
import * as joi from '@hapi/joi';
import {Injectable} from '@nestjs/common';

@CommandValidator(CreateFiscalia)
@Injectable()
export class CreateFiscaliaValidator extends JoiCommandValidator<
  CreateFiscalia
> {
  getSchema(command: CreateFiscalia) {
    return joi.object({
      nombre: joi.string().required(),
      departamento: joi.string().required(),
      municipio: joi.string().required(),
      ciudad: joi.string().required(),
      direccion: joi.string().required(),
      telefono: joi.string().required(),
      telefono2: joi.string().optional(),
      lat: joi.number().optional(),
      long: joi.number().optional(),
    });
  }
}
