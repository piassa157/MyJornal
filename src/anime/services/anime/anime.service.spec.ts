import { Test, TestingModule } from '@nestjs/testing';
import { AnimeService } from './anime.service';
import { AnimeDTO } from '../../dto/anime.dto';

describe('AnimeService', () => {
  let service: AnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeService, AnimeDTO],
    }).compile();

    service = module.get<AnimeService>(AnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
