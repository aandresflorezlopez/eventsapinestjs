import { ApiProperty } from '@nestjs/swagger';

export class SupplierServicesList {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class SupplierServicesFilter {
  @ApiProperty()
  supplierId?: number;

  @ApiProperty()
  category?: string;

  @ApiProperty()
  name?: string;
}
