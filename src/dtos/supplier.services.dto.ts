import { ApiProperty } from '@nestjs/swagger';

export class SupplierServicesList {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
