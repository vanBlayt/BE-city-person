import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comments } from 'src/common/schemas/comments.schema';
@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private CommentModel: Model<Comments>,
  ) {}

  async getCommentById(storyId): Promise<Array<Comments>> {
    return this.CommentModel.findOne({ id: storyId });
  }

  async deleteCommentById(storyId, commentId): Promise<any> {
    const storyComment: Comments = await this.CommentModel.findOne({
      id: storyId,
    });
    let comments = storyComment.comments;
    comments = comments.filter((comment) => comment.id !== commentId);
    return this.CommentModel.findOneAndUpdate({ id: storyId }, { comments });
  }

  async postComment(storyId, message, username): Promise<any> {
    const StoryComment: Comments = await this.CommentModel.findOne({
      id: storyId,
    });
    if (StoryComment !== null) {
      // 之前已经有评论了
      const comments = StoryComment.comments;
      comments.push({
        id: Date.now().toString(),
        words: message,
        time: new Date(),
        username,
      });
      return this.CommentModel.findOneAndUpdate({ id: storyId }, { comments });
    } else {
      // 创建评论
      const comments = [
        {
          id: Date.now().toString(),
          words: message,
          time: new Date(),
          username,
        },
      ];
      const storyComment = {
        id: storyId,
        comments,
      };
      return this.CommentModel.create(storyComment);
    }
  }
}
