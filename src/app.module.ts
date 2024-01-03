import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeModule } from './anime/anime.module';
import { AnimeService } from './anime/services/anime/anime.service';
import { AnimeController } from './anime/anime/anime.controller';

@Module({
  imports: [
    AnimeModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs_example'),
  ],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AppModule {}
