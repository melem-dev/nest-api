import { Nullable } from './CommonTypes';

interface QueryOptions<T> {
  where?: {
    and?: { field: keyof T; operator: 'AND'; value: any }[];
    or?: { field: keyof T; operator: 'OR'; value: any }[];
  };
  skip?: number;
  take?: number;
  orderBy?: string;
  deletedRecords?: boolean;
}

export interface BaseRepository<T> {
  find(query?: QueryOptions<T>): Promise<Nullable<T[]>>;
  findById(id: string): Promise<Nullable<T>>;
  count(query?: QueryOptions<T>): Promise<number>;
  create(data: T): Promise<boolean>;
  update(id: string, data: Partial<T>): Promise<boolean>;
  delete(id: string, hard_delete?: boolean): Promise<boolean>;
}
