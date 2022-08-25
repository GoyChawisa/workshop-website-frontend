import { Injectable } from '@nestjs/common';
import { DataTypes, Model, ModelCtor } from 'sequelize';
import { RDSService } from 'artifacts/rds/rds.service';
import { BaseRepository } from 'artifacts/rds/core/base.repository';

@Injectable()
export class ProductRepository extends BaseRepository {
  private productModel: ModelCtor<Model>;

  constructor(private readonly rdsService: RDSService) {
    super();
  }

  protected init() {
    this.productModel = this.rdsService
      .getRDSClient()
      .getModelBuilder()
      .define(
        'product',
        {
          id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
          },
          price: {
            type: DataTypes.NUMBER,
          },
          status: {
            type: DataTypes.STRING,
          },
          createdAt: {
            field: 'createdAt',
            type: DataTypes.DATE,
            defaultValue: Date.now,
          },
          updatedAt: {
            field: 'updatedAt',
            type: DataTypes.DATE,
          },
          deletedAt: {
            field: 'deletedAt',
            type: DataTypes.DATE,
          },
        },
        'products',
        true,
      );
    return this.productModel;
  }
}
