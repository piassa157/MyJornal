import * as mongoose from 'mongoose';

export const AnimeSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  number_episodes: String,
  seasons: String,
  release_date: String,
});
