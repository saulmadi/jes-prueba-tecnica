import {CompositeValidator} from '../../../common/commands/validation/CompositeValidator';
import {UpdateFiscalia} from '../../commands/update-fiscalia';
import {CommandValidator} from '../../../common/commands/validation';
import {UpdatePropertyValidator} from './update-property-validator';
import {UpdateExistanceValidator} from './update-existance-validator';

@CommandValidator(UpdateFiscalia)
export class UpdateFiscaliaValidator extends CompositeValidator<
  UpdateFiscalia
> {
  constructor(
    propetyValidator: UpdatePropertyValidator,
    existance: UpdateExistanceValidator,
  ) {
    super([propetyValidator, existance]);
  }
}
