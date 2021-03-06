import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Stories } from './stories.schema';

export interface comment {
  username: string;
  words: string;
  time: Date;
  id: string;
}

@Schema()
export class Comments {
  @Prop()
  id: string;

  @Prop()
  comments: Array<comment>;
}

export type CommentsDodument = Comments & Document;
export const CommentsSchema = SchemaFactory.createForClass(Comments);
