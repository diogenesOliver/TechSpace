import { CardEntitie } from "../../entities/Cards";
import { ICardRepository } from "../ICardRepository";
import { CardArray } from "../../domain/CardMock";

export class CardRepository implements ICardRepository{

    create(card: CardEntitie): CardEntitie {
        CardArray.push(card)
        return card
    }

}