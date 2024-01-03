import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from './anime.controller';
import { AnimeService } from '../services/anime/anime.service';
import { AnimeModule } from '../anime.module';

describe('AnimeController', () => {
  let controller: AnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AnimeModule], // Remova AnimeDTO dos imports
      controllers: [AnimeController],
      providers: [AnimeService],
    }).compile();

    controller = module.get<AnimeController>(AnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
