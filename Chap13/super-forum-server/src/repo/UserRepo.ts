import { User } from "./User";
import bcrypt from "bcryptjs";
import { isPasswordValid } from "../common/validators/PasswordValidator";
import { isEmailValid } from "../common/validators/EmailValidator";

const saltRounds = 10;

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const register = async (
  email: string,
  userName: string,
  password: string
): Promise<User | undefined> => {
  const result = isPasswordValid(password);
  if (!result.isValid) {
    throw new AuthError(
      "Passwords must have min length 8, 1 upper character, 1 number, and 1 symbol"
    );
  }

  const trimmedEmail = email.trim().toLowerCase();
  const emailErrorMsg = isEmailValid(trimmedEmail);
  if (emailErrorMsg) {
    throw new AuthError(emailErrorMsg);
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userEntity = await User.create({
    email: trimmedEmail,
    userName,
    password: hashedPassword,
  }).save();

  userEntity.password = ""; // blank out for security
  return userEntity;
};

export const login = async (
  userName: string,
  password: string
): Promise<User | undefined> => {
  const user = await User.findOne({
    where: { userName },
  });
  if (!user) return;

  if (!user.confirmed) {
    throw new AuthError("User has not confirmed their registration email yet.");
  }

  const passwordMatch = await bcrypt.compare(password, user?.password);
  if (!passwordMatch) {
    throw new AuthError("Password is invalid.");
  }

  return user;
};
