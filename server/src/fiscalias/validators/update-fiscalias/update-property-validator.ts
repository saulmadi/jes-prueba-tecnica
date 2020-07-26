import {Injectable} from '@nestjs/common';
import {JoiCommandValidator} from '../../../common/commands/validation';
import {UpdateFiscalia} from '../../commands/update-fiscalia';
import * as joi from '@hapi/joi';
import Joi from '@hapi/joi';

@Injectable()
export class UpdatePropertyValidator extends JoiCommandValidator<
  UpdateFiscalia
> {
  getSchema(command: UpdateFiscalia): Joi.Schema {
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
      id: joi.number().required(),
    });
  }
}
