import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Client } from "./Client";
import { Driver } from "./Driver";

@Entity()
export class Running {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  status: string;

  @OneToOne(() => Client, (clients) => clients.id)
  clients: Client;

  @OneToOne(() => Driver, (drivers) => drivers.id)
  drivers: Driver;
}
