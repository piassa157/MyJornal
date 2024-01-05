import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [
    AnimeModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs_example'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
