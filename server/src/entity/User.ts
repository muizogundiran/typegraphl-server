import { Field, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity("users")
@ObjectType()
export class User extends BaseEntity {
  @Field(() => String)
  @ObjectIdColumn()
  id: ObjectID;

  @Field(() => String)
  @Column("text")
  firstName: string;

  @Field(() => String)
  @Column("text")
  lastName: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
