import {Expense} from '../models/expense'
import { UserService } from './userService'

class ExpressService {

constructor(userService){
this.expenses = []
this.userService = userService
}

addExpense(paidBy, amount, description){
   if(!this.userService.hasUser(paidBy) ){
    throw new Error('User does not exist')
   }
    const expense = new Expense(paidBy, amount, description)
    this.expenses.push(expense)
}

getAllExpenses(){
    return [...this.expenses]
}

getExpenseByUser(userName){
   return this.expenses.filter((exp)=> exp.paidBy === userName )

}

clear(){
    this.expenses = []
}


simplifyExpenses(){

}


}



























