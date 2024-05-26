export type FindUserByIdDTO = {
  id: string;
}

export type FindUserByEmailDTO = {
  email: string;
}

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
}

export type UpdateUserByIdDTO = {
  id: string;
  password: string;
}

export type DeleteUserByIdDTO = {
  id: string;
}