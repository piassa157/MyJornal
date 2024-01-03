import { Test, TestingModule } from '@nestjs/testing';
import { AnimeService } from './anime.service';
import { AnimeDTO } from '../../dto/anime.dto';
import { AnimeModule } from '../../../anime/anime.module';
import { AppModule } from '../../../app.module';

describe('AnimeService', () => {
  let service: AnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AnimeModule, AppModule],
      providers: [{ provide: AnimeService, useValue: {} }, AnimeDTO],
    }).compile();

    service = module.get<AnimeService>(AnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
