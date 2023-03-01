export type ProductObjectType = {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly currencyFormat: string;
  readonly availableSizes: Array<string>;
  readonly sku: number;
  readonly currencyId: string;
  readonly description: string;
  readonly installments: number;
  readonly isFreeShipping: boolean;
  readonly style: string;
};
