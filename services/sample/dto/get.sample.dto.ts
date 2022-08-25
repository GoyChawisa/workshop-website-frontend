export class GetSampleDataListDTO {
  id: number = 0;
  name: string = '';
  email: string = '';
}

export class GetSampleDataMetaDTO {
  limit: number = 0;
  page: number = 0;
  pages:number = 0;
  total:number = 0;
}

export class GetSampleDataDTO {
  data: GetSampleDataListDTO[] = [];
  meta: GetSampleDataMetaDTO = new GetSampleDataMetaDTO();
}

export class GetSampleDTO {
  result: GetSampleDataDTO = new GetSampleDataDTO();
  message: string = '';
}
