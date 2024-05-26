import { User } from '@prefeitura/blog/users/data/User';

import {
  CreateUserDTO,
  DeleteUserByIdDTO,
  FindUserByEmailDTO,
  FindUserByIdDTO,
  UpdateUserByIdDTO
} from '@prefeitura/blog/users/repositories/dtos/UserDTO';

export interface IUserRepository {
  findById(findUserByIdDTO: FindUserByIdDTO): Promise<User | undefined>

  findByEmail(findUserByEmailDTO: FindUserByEmailDTO): Promise<User | undefined>

  create(createUserDTO: CreateUserDTO): Promise<User>;

  update(updateUserByIdDTO: UpdateUserByIdDTO): Promise<void>;

  delete(deleteUserByIdDTO: DeleteUserByIdDTO): Promise<boolean>;
}