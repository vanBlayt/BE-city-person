import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class LoginService {
  // @InjectModel('User') private UserModel: Model<UserDocument>
  constructor() {}
}
