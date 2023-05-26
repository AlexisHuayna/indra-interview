import { Test, TestingModule } from '@nestjs/testing';
import { Swapi } from './swapi';

describe('Swapi', () => {
  let provider: Swapi;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Swapi],
    }).compile();

    provider = module.get<Swapi>(Swapi);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
