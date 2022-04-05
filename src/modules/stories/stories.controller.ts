import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StoriesService } from './stories.service';
import { Stories } from 'src/common/schemas/stories.schema';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('uploadImg')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  async uploadImg(@UploadedFile() file: Express.Multer.File): Promise<any> {
    return this.storiesService.uploadImg(file);
  }

  @Post('createStory')
  @UseGuards(AuthGuard('jwt'))
  async createStory(@Body() body): Promise<any> {
    return this.storiesService.createStory(body);
  }
}
