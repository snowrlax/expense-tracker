export interface Entry {
  id: number;
  description: string;
  amount: number;
  date: Date;
  type: "EXPENSE" | "INCOME";
}
