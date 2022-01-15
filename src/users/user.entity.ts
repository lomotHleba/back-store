import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums";

// interface UserCreationAttrs {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   lastLogin: Date;
//   role: string;
// }

@Entity({ name: "users" })
export class User {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "user@mail.ru", description: "Email" })
  @Column({ type: "varchar", unique: true })
  email: string;

  // @ApiProperty({ example: "MegaKiller777", description: "User Name" })
  // @Column({ type: DataType.STRING, unique: true, allowNull: false })
  // name: string;

  @ApiProperty({ example: "12345678", description: "Password" })
  @Column({ type: "varchar", nullable: true })
  password: string;

  @ApiProperty({
    example: "01.01.2022",
    description: "Last session date",
  })
  @Column({ type: "timestamp", nullable: true, name: "last_login" })
  lastLogin: Date;

  @ApiProperty({ example: "user", description: "User role" })
  @Column({ type: "enum", default: UserRole.USER })
  role: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
