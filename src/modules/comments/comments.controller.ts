import {
  Controller,
  UseGuards,
  Get,
  Request,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';
import { Comments } from 'src/common/schemas/comments.schema';
import { get } from 'http';
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async getCommentsById(@Request() req): Promise<Array<Comments>> {
    const query = req.query;
    const { storyId } = query;
    const res = this.commentsService.getCommentById(storyId);
    return res;
  }

  @Delete('deleteComment')
  @UseGuards(AuthGuard('jwt'))
  async deleteCommentById(@Request() req): Promise<any> {
    const { storyId, commentId } = req.query;
    return this.commentsService.deleteCommentById(storyId, commentId);
  }

  @Post('postComment')
  @UseGuards(AuthGuard('jwt'))
  async postMessage(@Request() req, @Body() body): Promise<any> {
    const { storyId } = req.query;
    const { username } = req.user;
    const { message } = body;
    return this.commentsService.postComment(storyId, message, username);
  }
}
