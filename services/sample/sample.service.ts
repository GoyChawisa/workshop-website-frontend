import { SampleBackstage } from './backstages/sample.backstage';
import { SampleRepository } from './repositories/sample.repository';
import { GetSampleDTO } from '~/services/sample/dto/get.sample.dto';

export class SampleService extends SampleBackstage {
  private sampleRepository = new SampleRepository(this.$api);

  async getSampleList(): Promise<GetSampleDTO> {
    let dataResult: any = new GetSampleDTO();
    try {
      dataResult = await this.sampleRepository.getSampleList();
    } catch (err) {
      dataResult.message = 'failed';
      console.log(err, SampleService.name);
    }

    return dataResult;
  }

}
