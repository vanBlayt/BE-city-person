import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface comment {
  username: string;
  words: string;
  time: Date;
}

@Schema()
export class Comments {
  @Prop()
  _id: string;

  @Prop()
  comments: Array<comment>;
}

export type CommentsDodument = Comments & Document;
export const CommentsSchema = SchemaFactory.createForClass(Comments);
