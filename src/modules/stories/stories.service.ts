import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Stories, StoriesDocument } from 'src/common/schemas/stories.schema';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { mergeStory } from 'src/common/utils/story';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Stories.name) private StoriesModel: Model<Stories>,
  ) {}

  /**
   * 获取Story 列表
   * @returns Story
   */
  async getStoriesIntroduce(): Promise<Array<Stories>> {
    return this.StoriesModel.find();
  }

  /**
   *  获取Story 详情
   * @param id Story id
   * @returns Story
   */
  async getSingleStory(id: string): Promise<Stories> {
    const res = await this.StoriesModel.findOne({
      id,
    });
    return res;
  }

  /**
   * delete Story
   * @param id Story id
   * @returns 操作是否成功
   */
  async deleteStory(id: string): Promise<any> {
    // TODO 删除
    // this.StoriesModel.findOneAndDelete
    return this.StoriesModel.deleteOne({ id });
  }

  async updateStory(id, body): Promise<any> {
    return this.StoriesModel.findOneAndUpdate({ id }, mergeStory(body));
  }

  /**
   * 添加 Story
   * @returns boolean
   */
  async createStory(body): Promise<boolean> {
    this.StoriesModel.create(mergeStory(body));
    return true;
  }

  async uploadImg(file: Express.Multer.File): Promise<any> {
    const random = Date.now() + '&';
    const stream = createWriteStream(
      join('public/img', random + file.originalname),
    );
    stream.write(file.buffer);
    return {
      url: `http://509gl41925.zicp.vip:45760/static/img/${
        random + file.originalname
      }`,
    };
  }
}
