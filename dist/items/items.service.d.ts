import { Item } from './items.interface';
export declare class ItemsService {
    private readonly items;
    findAll(): Item[];
    create(item: Item): void;
}
