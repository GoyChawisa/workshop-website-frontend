import { GetSampleDataDTO } from '../dto/get.sample.dto';
export class SampleRepository {
  private $api: any;

  constructor($api: any) {
    this.$api = $api;
  }

  async getSampleList(): Promise<GetSampleDataDTO> {
    const dataResult = await this.$api.main.$get('/public/v1/users');
    return dataResult;
  }
}
