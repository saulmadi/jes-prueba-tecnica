import {CreateFiscaliaValidator} from './create-fiscalia-validator';
import {UpdateFiscaliaValidator} from './update-fiscalias/update-fiscalia-validator';
import {UpdateExistanceValidator} from './update-fiscalias/update-existance-validator';
import {UpdatePropertyValidator} from './update-fiscalias/update-property-validator';

export const CommandValidators = [
  CreateFiscaliaValidator,
  UpdateFiscaliaValidator,
  UpdateExistanceValidator,
  UpdatePropertyValidator,
];
