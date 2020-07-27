export interface Fiscalia {
    direccion: string;
    id: number;
    nombre: string;
    departamento: string;
    municipio: string;
    ciudad: string;
    telefono: string;
    telefono2?: any;
    lat?: any;
    long?: any;

}

export interface ListFiscalias {
    currentPage: number;
    data: Fiscalia[];
    lastPage: number;
    perPage: number;
    total: number;

}