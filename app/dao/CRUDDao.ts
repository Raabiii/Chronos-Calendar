import { Identifiable } from "../model/Identifiable";

export interface CRUDDao<T extends Identifiable> {
  insert(item: T): void;
  update(item: T): void;
  delete(id: string): void;
  list(): Promise<T[]>;
}
