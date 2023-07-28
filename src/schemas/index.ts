import * as UserSchema from './user';


export { UserSchema };

// response wrapper
export interface Response<T> {
  code: number;
  msg: string;
  data: T;
  success: boolean;
}
