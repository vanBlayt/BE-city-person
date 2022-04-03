import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';
import { Comments } from 'src/common/schemas/comments.schema';
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async getCommentsById(@Request() req): Promise<Array<Comments>> {
    const query = req.query;
    const { id } = query;
    const res = this.commentsService.getCommentById(id);
    return res;
  }
}
