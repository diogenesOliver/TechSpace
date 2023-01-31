import { CardEntitie } from "../entities/Cards";

export interface ICardRepository{
    create(card: CardEntitie): CardEntitie
}