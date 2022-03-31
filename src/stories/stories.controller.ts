import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StoriesService } from './stories.service';
import { Stories } from '../schemas/stories.schema';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('introduce')
  async getStoriesIntroduce(): Promise<Array<Stories>> {
    return this.storiesService.getStoriesIntroduce();
  }

  @Get('singleStory')
  @UseGuards(AuthGuard('jwt'))
  async getSingleStory(@Request() req): Promise<Stories> {
    const { id } = req.query;
    return this.storiesService.getSingleStory(id);
  }
}
