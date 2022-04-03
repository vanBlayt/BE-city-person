import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesSchema, Stories } from 'src/common/schemas/stories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stories', schema: StoriesSchema }]),
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
