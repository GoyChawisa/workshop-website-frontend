import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { ResponseDTO } from 'src/common/dto/response.dto';
import { RequestDTO } from 'src/common/dto/request.dto';
import { ProductSearchDTO } from './dto/product-search.dto';
import { ErrorInterceptor } from 'src/common/interceptor/error.interceptor';
import { Public } from 'artifacts/auth/metadata/public.metadata';


@Controller('/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Public()
  @Get('/search')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new ErrorInterceptor())
  searchProduct(
    @Query() productSearchDTO: ProductSearchDTO,
  ): Promise<ResponseDTO<ProductDTO[]>> {
    return this.productService.search(productSearchDTO).then((result) => {
      return result;
    });
  }

  @Get('/get/:id')
  @UseInterceptors(new ErrorInterceptor())
  getProduct(@Param('id') id: string): Promise<ResponseDTO<ProductDTO>> {
    return this.productService.read(id).then((result) => {
      const response = new ResponseDTO<ProductDTO>();
      response.data = result;

      return response;
    });
  }

  @Post('/create')
  @UseInterceptors(new ErrorInterceptor())
  createProduct(@Body() productDTO: RequestDTO<ProductDTO>): Promise<ResponseDTO<ProductDTO>> {
    return this.productService.create(productDTO.data).then((result) => {
      const response = new ResponseDTO<ProductDTO>();
      response.data = result;

      return response;
    });
  }

  @Put('/update')
  @UseInterceptors(new ErrorInterceptor())
  updateProduct(
    @Body() productUpdateDTO: RequestDTO<ProductDTO>,
  ): Promise<ResponseDTO<ProductDTO>> {
    return this.productService.update(productUpdateDTO.data).then((result) => {
      const response = new ResponseDTO<ProductDTO>();
      response.data = result;

      return response;
    });
  }

  @Delete('/delete/:id')
  @UseInterceptors(new ErrorInterceptor())
  deleteProduct(@Param('id') id: string): Promise<ResponseDTO<any>> {
    return this.productService.delete(id).then((result) => {
      const response = new ResponseDTO<any>();
      response.data = result;

      return response;
    });
  }
}
