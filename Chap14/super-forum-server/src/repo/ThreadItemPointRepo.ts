import { getManager } from "typeorm";
import { ThreadItem } from "./ThreadItem";
import { ThreadItemPoint } from "./ThreadItemPoint";

export const incThreadItemPoint = async (
  userId: string,
  threadItemId: string
): Promise<string> => {
  let message = "Failed to increment thread item point";
  const threadItem = await ThreadItem.findOne({
    where: { id: threadItemId },
    relations: ["user"],
  });
  if (threadItem!.user!.id === userId) {
    message = "Users cannot increment their own thread item";
    console.log("incThreadItemPoints", message);
    return message;
  }

  const decPoint = await ThreadItemPoint.findOne({
    where: {
      threadItem: { id: threadItemId },
      isDecrement: true,
      user: { id: userId },
    },
    relations: ["threadItem"],
  });
  await getManager().transaction(async (transactionEntityManager) => {
    if (decPoint) {
    } else {
    }
  });

  return message;
};
