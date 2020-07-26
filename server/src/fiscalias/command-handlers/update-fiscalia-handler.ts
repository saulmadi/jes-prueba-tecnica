import {BaseCommandHandler} from '../../common/commands';
import {UpdateFiscalia} from '../commands/update-fiscalia';
import {CommandHandler} from '@nestjs/cqrs';
import {Injectable} from '@nestjs/common';
import {FiscaliaRepository} from '../repositories/fiscalia-repository';

@CommandHandler(UpdateFiscalia)
@Injectable()
export class UpdateFiscaliaHandler extends BaseCommandHandler<
  UpdateFiscalia,
  void
> {
  constructor(private repository: FiscaliaRepository) {
    super();
  }

  async handle(command: UpdateFiscalia): Promise<void> {
    const fiscalia = await this.repository.findById(command.id);
    fiscalia.actualizar({ ...command });
    await this.repository.save(fiscalia);
  }
}
