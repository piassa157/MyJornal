import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimeDTO } from '../../dto/anime.dto';
import { Anime } from '../../interfaces/anime.interface';

@Injectable()
export class AnimeService {
  constructor(@InjectModel('Anime') private animeModel: Model<Anime>) {}

  async create(animeDto: AnimeDTO): Promise<Anime> {
    const createdAnime = new this.animeModel(animeDto);
    return createdAnime.save();
  }

  async findAll(): Promise<Anime[]> {
    return this.animeModel.find().exec();
  }
}
