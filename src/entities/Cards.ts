interface ICardEntitie{
    title: string,
    description: string,
    link: string
}

export class CardEntitie{

    public props: ICardEntitie

    constructor(props: ICardEntitie){
        this.props = props
    }

}