import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@PrimaryColumn({ type: "varchar", nullable: false })
	useraccount: string;

	@Column({ type: "varchar", nullable: false })
	username: string;

	@Column({ type: "varchar", nullable: false })
	password: string;

	@Column({ type: "varchar", nullable: false })
	salt: string;

	@Column({ type: "varchar", nullable: true })
	avatar: string;

	@Column({ type: "varchar", nullable: false })
	color: string;

	@Column({ type: "boolean", nullable: false, default: false })
	online: boolean;
}
