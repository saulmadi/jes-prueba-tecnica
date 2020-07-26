import {ICommandValidator, IValidationResult,} from '../../../common/commands/validation';
import {UpdateFiscalia} from '../../commands/update-fiscalia';
import {Injectable} from '@nestjs/common';
import {FiscaliaRepository} from '../../repositories/fiscalia-repository';

@Injectable()
export class UpdateExistanceValidator
  implements ICommandValidator<UpdateFiscalia> {
  constructor(private repository: FiscaliaRepository) {}

  async validate(command: UpdateFiscalia): Promise<IValidationResult> {
    const queryResult = await this.repository.where({ id: command.id }).get();

    if (queryResult.length > 0) {
      return {
        hasError: false,
        errors: [],
      };
    }
    return {
      hasError: true,
      errors: [
        {
          field: 'id',
          fieldLabel: 'id',
          message: 'La fiscalia no es valida',
          value: command.id,
        },
      ],
    };
  }
}
