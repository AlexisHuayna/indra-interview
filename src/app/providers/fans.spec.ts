import { Test, TestingModule } from '@nestjs/testing';
import { Fans } from './fans';

describe('Fans', () => {
  let provider: Fans;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Fans],
    }).compile();

    provider = module.get<Fans>(Fans);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
