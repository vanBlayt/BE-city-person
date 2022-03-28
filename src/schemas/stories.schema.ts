import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stories {
  @Prop()
  _id: string;

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
}

export type StoriesDocument = Stories & Document;
export const StoriesSchema = SchemaFactory.createForClass(Stories);
