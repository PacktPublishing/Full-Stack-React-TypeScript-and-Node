import { getManager } from "typeorm";
import { Thread } from "./Thread";
import { ThreadPoint } from "./ThreadPoint";
import { User } from "./User";

export const updateThreadPoint = async (
  userId: string,
  threadId: string,
  increment: boolean
): Promise<string> => {
  if (!userId || userId === "0") {
    return "User is not authenticated";
  }

  let message = "Failed to increment thread point";
  const thread = await Thread.findOne({
    where: { id: threadId },
    relations: ["user"],
  });
  if (thread!.user!.id === userId) {
    message = "Error: users cannot increment their own thread";
    console.log("incThreadPoints", message);
    return message;
  }
  const user = await User.findOne({ where: { id: userId } });

  const existingPoint = await ThreadPoint.findOne({
    where: {
      thread: { id: threadId },
      user: { id: userId },
    },
    relations: ["thread"],
  });
  await getManager().transaction(async (transactionEntityManager) => {
    if (existingPoint) {
      if (increment) {
        if (existingPoint.isDecrement) {
          console.log("remove dec");
          await ThreadPoint.remove(existingPoint);
          thread!.points = Number(thread!.points) + 1;
          thread!.lastModifiedOn = new Date();
          await thread!.save();
        }
      } else {
        if (!existingPoint.isDecrement) {
          console.log("remove inc");
          await ThreadPoint.remove(existingPoint);
          thread!.points = Number(thread!.points) - 1;
          thread!.lastModifiedOn = new Date();
          await thread!.save();
        }
      }
    } else {
      console.log("new point");
      await ThreadPoint.create({
        thread,
        isDecrement: !increment,
        user,
      }).save();
      if (increment) {
        thread!.points = Number(thread!.points) + 1;
      } else {
        thread!.points = Number(thread!.points) - 1;
      }
      thread!.lastModifiedOn = new Date();
      await thread!.save();
    }

    message = `Successfully ${
      increment ? "incremented" : "decremented"
    } point.`;
  });

  return message;
};
