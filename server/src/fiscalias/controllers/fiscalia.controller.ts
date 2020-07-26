import {Body, Controller, Get, Param, Post, Put, Query} from '@nestjs/common';
import {SyncCommandDispatcher} from '../../common/commands';
import {FiscaliaRepository} from '../repositories/fiscalia-repository';
import {PaginatedOrderQuery} from '../../common/controllers';
import {FiscaliaRequest} from './requests/fiscalia-request';
import {CreateFiscalia} from '../commands/create-fiscalia';
import {UpdateFiscalia} from '../commands/update-fiscalia';

@Controller('/fiscalias')
export class FiscaliaController {
  constructor(
    private readonly commandDispatcher: SyncCommandDispatcher,
    private readonly repository: FiscaliaRepository,
  ) {}

  @Get()
  async getFicalias(@Query() query: PaginatedOrderQuery) {
    return this.repository
      .where({ id: query.id })
      .relation(query.relations)
      .paginate(query.page, query.perPage);
  }
  @Post()
  async createFiscalias(@Body() request: FiscaliaRequest) {
    const createFiscalia: CreateFiscalia = new CreateFiscalia(
      request.nombre,
      request.departamento,
      request.municipio,
      request.ciudad,
      request.direccion,
      request.telefono,
      request.telefono2,
      request.lat,
      request.long,
    );
    await this.commandDispatcher.execute(createFiscalia);

    return null;
  }

  @Put(':id')
  async updateFicalia(
    @Param('id') id: number,
    @Body() request: FiscaliaRequest,
  ) {
    const updateFiscalia: UpdateFiscalia = new UpdateFiscalia(
      id,
      request.nombre,
      request.departamento,
      request.municipio,
      request.ciudad,
      request.direccion,
      request.telefono,
      request.telefono2,
      request.lat,
      request.long,
    );
    await this.commandDispatcher.execute(updateFiscalia);

    return null;
  }
}
