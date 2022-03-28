import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Stories, StoriesDocument } from 'src/schemas/stories.schema';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Stories.name) private StoriesModel: Model<Stories>,
  ) {}
  async getStoriesIntroduce(): Promise<Array<Stories>> {
    return this.StoriesModel.find();
  }
}
