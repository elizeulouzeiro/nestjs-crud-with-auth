import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  public async verifyServiceHealth(): Promise<string> {
    return 'Service is healthy';
  }
}
