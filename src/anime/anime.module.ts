import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeController } from './anime/anime.controller';
import { AnimeSchema } from './models/anime.schema';
import { AnimeService } from './services/anime/anime.service';
import { AppModule } from '../../src/app.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Anime', schema: AnimeSchema }]),
  ],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
