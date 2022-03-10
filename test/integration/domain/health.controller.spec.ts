import { Test, TestingModule } from '@nestjs/testing';
import { HealthController, HealthModule } from '../../../src/domain/health';

describe('HealthController', () => {
  let healthController: HealthController;

  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    healthController = app.get(HealthController);
  });

  afterEach(async () => await app.close());

  describe('/health_check', () => {
    const expectedReturn = 'Service is healthy';

    it(`should return "${expectedReturn}"`, async () => {
      const value = await healthController.getHealth();
      expect(value).toEqual(expectedReturn);
    });
  });
});
