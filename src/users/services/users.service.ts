import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "../dto/update-user.dto";

import { User } from "../schemas/user.schema";
import { UsersRepository } from "../users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(email: string, name: string, phone: string, address: string): Promise<User> {
        return this.usersRepository.create({
           
            email,
            name,
            phone,
            address
        })
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }

    async remove(id: string): Promise<User> {
        return this.usersRepository.remove(id);
      }
}