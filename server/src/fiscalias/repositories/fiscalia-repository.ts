import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../../common/entities';
import {Fiscalia} from '../entities/fiscalia';
import {InjectEntityManager} from '@nestjs/typeorm';
import {EntityManager} from 'typeorm';
import {SyncEventDispatcher} from '../../common/events';

@Injectable()
export class FiscaliaRepository extends BaseRepository<number, Fiscalia> {
  constructor(
    @InjectEntityManager()
    manager: EntityManager,
    eventDispatcher: SyncEventDispatcher,
  ) {
    super(manager.getRepository(Fiscalia), eventDispatcher);
  }
}
