import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Driver } from "./Driver";

@Entity("trips")
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  destino: string;

  @Column()
  origem: string;

  @Column()
  status: string;

  @ManyToMany((type) => Driver, (user) => user.id)
  user: Driver;

  constructor(props: Omit<Trip, "id" | "users">) {
    Object.assign(this, props);
  }
}

export default Trip;
