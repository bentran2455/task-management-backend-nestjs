import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class UserImage {
  @Prop()
  image_url: string;

  @Prop()
  public_id: string;
}

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  role: string;

  @Prop({ type: UserImage })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
