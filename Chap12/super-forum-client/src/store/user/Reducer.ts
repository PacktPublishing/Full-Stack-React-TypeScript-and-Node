export const UserProfileSetType = "USER_PROFILE_SET";

export interface UserProfilePayload {
  id: string;
  userName: string;
}

export interface UserProfileAction {
  type: string;
  payload: UserProfilePayload | null;
}

export const UserProfileReducer = (
  state: any = null,
  action: UserProfileAction
): UserProfilePayload | null => {
  switch (action.type) {
    case UserProfileSetType:
      return action.payload;
    default:
      return state;
  }
};
