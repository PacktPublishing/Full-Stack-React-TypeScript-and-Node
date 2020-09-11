import { Column, BaseEntity } from "typeorm";

export class Auditable extends BaseEntity {
  @Column("varchar", {
    name: "CreatedBy",
    length: 60,
    default: () => `getpgusername()`,
    nullable: false,
  })
  createdBy: string;

  @Column("timestamp with time zone", {
    name: "CreatedOn",
    default: () => `now()`,
    nullable: false,
  })
  createdOn: Date;

  @Column("varchar", {
    name: "LastModifiedBy",
    length: 60,
    default: () => `getpgusername()`,
    nullable: false,
  })
  lastModifiedBy: string;

  @Column("timestamp with time zone", {
    name: "LastModifiedOn",
    default: () => `now()`,
    nullable: false,
  })
  lastModifiedOn: Date;
}
