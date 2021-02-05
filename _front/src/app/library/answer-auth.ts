import { BudgetItem } from "../budget-item";

export class AnswerAuth {
    success: boolean;
    msg: string;
    userName?: string;
    accessToken?:string;
    refreshToken?: string;
    budgetItems?: BudgetItem[];
}
