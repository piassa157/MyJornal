import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from './anime.controller';
import { AnimeService } from '../services/anime/anime.service';
import { AnimeModule } from '../../anime/anime.module';
import { AppModule } from '../../app.module';

describe('AnimeController', () => {
  let controller: AnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AnimeModule, AppModule],
      controllers: [AnimeController],
      providers: [
        {
          provide: AnimeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AnimeController>(AnimeController);
  }, 10000); // Set the timeout value to 10000 ms (10 seconds)

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
