import { SERVICES_PORTS } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `API GATEWAY is running on PORT ${SERVICES_PORTS.API_GATEWAY}`;
  }
}
