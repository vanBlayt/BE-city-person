import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

@Schema()
export class Stories {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  agree: number;

  @Prop()
  commentNumbers: number;

  @Prop()
  images: Array<string>;

  @Prop()
  date: Date;
}

export type StoriesDocument = Stories & Document;
export const StoriesSchema = SchemaFactory.createForClass(Stories);
