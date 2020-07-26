import {BaseCommandHandler} from '../../common/commands';
import {CreateFiscalia} from '../commands/create-fiscalia';
import {FiscaliaRepository} from '../repositories/fiscalia-repository';
import {Fiscalia} from '../entities/fiscalia';
import {CommandHandler} from '@nestjs/cqrs';
import {Injectable} from '@nestjs/common';

@CommandHandler(CreateFiscalia)
@Injectable()
export class CreateFiscaliaHandler extends BaseCommandHandler<
  CreateFiscalia,
  void
> {
  constructor(private repository: FiscaliaRepository) {
    super();
  }

  async handle(command: CreateFiscalia): Promise<void> {
    const fiscalia = new Fiscalia({ ...command });

    await this.repository.save(fiscalia);
  }
}
