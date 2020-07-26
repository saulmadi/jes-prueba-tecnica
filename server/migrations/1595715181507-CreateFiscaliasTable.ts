import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateFiscaliasTable1595715181507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fiscalias',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nombre',
            type: 'varchar',
          },
          {
            name: 'departamento',
            type: 'varchar',
          },
          {
            name: 'municipio',
            type: 'varchar',
          },
          {
            name: 'ciudad',
            type: 'varchar',
          },
          {
            name: 'direccion',
            type: 'varchar',
          },
          {
            name: 'telefono',
            type: 'varchar',
          },
          {
            name: 'telefono2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lat',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'long',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fiscalias');
  }
}
