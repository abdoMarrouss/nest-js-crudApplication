import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
        return this.userModel.find(usersFilterQuery)
    }

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save()
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user, { new: true });
    }

    // new update methode 
    async findByIdAndUpdate(user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(user).exec();

    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id).exec();
      }
}