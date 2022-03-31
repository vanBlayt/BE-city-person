import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Stories, StoriesDocument } from 'src/schemas/stories.schema';
const mongoose = require('mongoose');

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
  async deleteSingleStory(id: string): Promise<boolean> {
    // TODO 删除
    // this.StoriesModel.findOneAndDelete
    return true;
  }

  /**
   * 添加 Story
   * @returns boolean
   */
  async addSingleStory(): Promise<boolean> {
    return true;
  }
}
