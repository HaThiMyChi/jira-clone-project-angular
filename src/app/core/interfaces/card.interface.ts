import { CardTypesEnum } from "../enums/card-types.enum";

export interface Card {
    id: string;
    title: string;
    type: CardTypesEnum;
    columnId: string;
    description: string;
    createAt: string;
    updatedAt: string;

}