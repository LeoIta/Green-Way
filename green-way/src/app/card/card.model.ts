export class Card {
  constructor(
    public name: String | undefined,
    public src: String | undefined,
    public alt: String | undefined,
    public price?: Number | undefined
  ) {}
}
