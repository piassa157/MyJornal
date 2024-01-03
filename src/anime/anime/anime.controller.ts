import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimeDTO } from '../dto/anime.dto';
import { Anime } from '../interfaces/anime.interface';
import { AnimeService } from '../services/anime/anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Post()
  async create(@Body() animeDto: AnimeDTO): Promise<Anime> {
    return this.animeService.create(animeDto);
  }

  @Get()
  async animeIndex(): Promise<Anime[]> {
    return this.animeService.findAll();
  }
}
