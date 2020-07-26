import {Module, OnModuleInit} from '@nestjs/common';
import {CommandHandlers} from './command-handlers';
import {FiscaliaRepository} from './repositories/fiscalia-repository';
import {CommonModule, SyncCommandDispatcher} from '../common';
import {FiscaliaController} from './controllers/fiscalia.controller';
import {CommandValidators} from './validators';
import {ModuleRef} from '@nestjs/core';

@Module({
  imports: [CommonModule],
  controllers: [FiscaliaController],
  providers: [FiscaliaRepository, ...CommandHandlers, ...CommandValidators],
})
export class FiscaliasModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: SyncCommandDispatcher,
  ) {}
  onModuleInit(): any {
    this.command$.setModuleRef(this.moduleRef);
    this.command$.registerValidators(CommandValidators);
  }
}
