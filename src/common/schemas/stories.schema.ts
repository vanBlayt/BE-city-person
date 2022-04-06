import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import { User } from './user.schema';
@Schema()
export class Stories {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  content?: string;

  @Prop()
  agree?: number;

  @Prop()
  commentNumbers?: number;

  @Prop()
  images?: Array<string>;

  @Prop()
  date: Date;

  @Prop()
  creator: string;
}

export type StoriesDocument = Stories & Document;
export const StoriesSchema = SchemaFactory.createForClass(Stories);
