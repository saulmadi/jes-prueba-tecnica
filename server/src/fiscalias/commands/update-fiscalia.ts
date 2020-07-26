import {ICommand} from '../../common/commands';

export class UpdateFiscalia implements ICommand {
  constructor(
    public id: number,
    public nombre: string,
    public departamento: string,
    public municipio: string,
    public ciudad: string,
    public direccion: string,
    public telefono: string,
    public telefono2: string,
    public lat: number,
    public long: number,
  ) {}
}
