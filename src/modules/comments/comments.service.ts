import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comments } from 'src/common/schemas/comments.schema';
@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private CommentModel: Model<Comments>,
  ) {}

  async getCommentById(commentId): Promise<Array<Comments>> {
    const res = await this.CommentModel.find({ id: commentId });
    return res;
  }
}
