import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {}

  async findAll(user): Promise<User[]> {
    return await this.UserModel.find(user).exec();
  }
}
