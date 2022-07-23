import { CreateItemDto } from './item.dto';
import { ItemsService } from './items.service';
import { Item } from './items.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    create(createItemDto: CreateItemDto): Promise<void>;
}
