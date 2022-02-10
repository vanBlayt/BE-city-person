import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { CreateCatDto } from './dto/create-cat.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async findAll(): Promise<any> {
    return this.UserModel.find().exec();
  }

  /**
   * find user by username
   * @param username string
   * @returns user
   */
  async find(username: string): Promise<User[]> {
    return this.UserModel.find({ username: username });
  }
}
