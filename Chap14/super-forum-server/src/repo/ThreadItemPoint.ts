import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";
import { ThreadItem } from "./ThreadItem";
import { Auditable } from "./Auditable";

@Entity({ name: "ThreadItemPoints" })
export class ThreadItemPoint extends Auditable {
  @PrimaryGeneratedColumn({ name: "Id", type: "bigint" }) // for typeorm
  id: string;

  @Column("boolean", { name: "IsDecrement", default: false, nullable: false })
  isDecrement: boolean;

  @ManyToOne(() => User, (user) => user.threadPoints)
  user: User;

  @ManyToOne(() => ThreadItem, (threadItem) => threadItem.threadItemPoints)
  threadItem: ThreadItem;
}
