export interface IFactureItem {
  id: number;
  description: string;
  prix: number;
  quantite: number;
}

export interface IFacture {
  id: number;
  date: Date;
  montant: number;
  client: string;
  items: IFactureItem[];
}

export const factures: IFacture[] = [
  {
    id: 1,
    date: new Date('2014-04-01T17:05:00'),
    montant: 100,
    client: 'Dwight Schrute',
    items: [
      { id: 1, description: 'Bettraves', prix: 10, quantite: 5 },
      { id: 2, description: 'Ours noir', prix: 1230, quantite: 1 },
    ],
  },
  {
    id: 2,
    date: new Date('2014-05-01T19:05:00'),
    montant: 200,
    client: 'Client 2',
    items: [
      { id: 3, description: 'Produit 3', prix: 30, quantite: 4 },
      { id: 4, description: 'Produit 4', prix: 40, quantite: 2 },
    ],
  },
];
