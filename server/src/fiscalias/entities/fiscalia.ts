import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {AggregateRoot} from '../../common/entities';

@Entity('fiscalias')
export class Fiscalia extends AggregateRoot<number> {
  @Column()
  direccion: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  departamento: string;

  @Column()
  municipio: string;

  @Column()
  ciudad: string;

  constructor(param: {
    municipio: string;
    ciudad: string;
    direccion: string;
    departamento: string;
    telefono2: string;
    telefono: string;
    nombre: string;
    lat: number;
    long: number;
  }) {
    super();
    Object.assign(this, param);
  }

  @Column()
  telefono: string;

  @Column()
  telefono2: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  actualizar(param: {
    municipio: string;
    ciudad: string;
    direccion: string;
    departamento: string;
    telefono2: string;
    telefono: string;
    nombre: string;
    lat: number;
    long: number;
  }) {
    const {
      ciudad,
      nombre,
      telefono2,
      telefono,
      long,
      lat,
      municipio,
      departamento,
      direccion,
    } = param;

    this.direccion = direccion;
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.nombre = nombre;
    this.telefono2 = telefono2;
    this.telefono = telefono;
    this.long = long;
    this.lat = lat;
    this.municipio = municipio;
  }
}
