import { BudgetItem } from "./budget-item";


export class Answer {
    success: boolean;
    msg: string;
    userName?: string;
    accessToken?:string;
    refreshToken?: string;
    budgetItems?: BudgetItem[];
    tempPassToken?: string;
}
