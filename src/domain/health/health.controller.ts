import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('/health_check')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/')
  public async getHealth(): Promise<string> {
    return this.healthService.verifyServiceHealth();
  }
}
