import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDate } from 'class-validator';
import { BaseDTO } from 'src/common/dto/base.dto';

export class ProductDTO extends BaseDTO {
  @IsNumber()
  @ApiProperty({
    description: 'id of product',
    type: Number,
    example: 1,
  })
  id: number;

  @IsDate()
  @ApiProperty({
    description: 'Created date of product',
    type: Date,
    example: '',
  })
  createdAt: Date;

  @IsDate()
  @ApiProperty({
    description: 'Updated date of product',
    type: Date,
    example: '',
  })
  updatedAt: Date;
}
