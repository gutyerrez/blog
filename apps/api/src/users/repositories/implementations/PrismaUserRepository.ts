import { Inject } from '@nestjs/common';

import { User } from '@prefeitura/blog/users/data/User';

import { FindUserByIdDTO } from '@prefeitura/blog/users/repositories/dtos/UserDTO';

import { IUserRepository } from '@prefeitura/blog/users/repositories/interfaces/IUserRepository';

import { PrismaClient } from '@prisma/client';

export class PrismaUserRepository implements IUserRepository {
  @Inject('PrismaClient')
  private readonly database: PrismaClient;

  public async findById(findUserByIdDTO: FindUserByIdDTO): Promise<User> {
    const result = await this.database.$executeRaw<User | undefined>`
      SELECT
        id,
        name,
        email,
        created_at,
        updated_at
      WHERE
        id = ${findUserByIdDTO.id}
      LIMIT 1;
    `;
  }
}