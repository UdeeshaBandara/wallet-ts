import { Model, Q } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';
import { database } from '../../../index';

export default class Budget extends Model {
  static table = 'budgets';
  static associations = {
    budget_categories: { type: 'has_many', foreignKey: 'budget_id' },
  };

  @field('name') name;
  @field('amount') amount;
  @field('time') time;
  @field('orderNum') orderNum;
  @date('last_updated') last_updated;

  static reOrderBudgetById = async budgetDetails => {
    return await database.write(async async => {
      const budgetCollection = await database.collections
        .get('budgets')
        .find(budgetDetails.id);
      return await budgetCollection.update(bdj => {
        bdj.orderNum = budgetDetails.orderNum;
      });
    });
  };

  static updateBudgetById = async budgetDetails => {
    return await database.write(async async => {
      const budgetCollection = await database.collections
        .get('budgets')
        .find(budgetDetails.id);
      return await budgetCollection.update(bdj => {
        bdj.name = budgetDetails.name;
        bdj.amount = budgetDetails.amount;
      });
    });
  };

  static createBudget = async budgetDetails => {
    return await database.write(async () => {
      const budgetCollection = database.collections.get('budgets');
      return await budgetCollection.create(budget => {
        budget.name = budgetDetails.name;
        budget.amount = budgetDetails.amount;
        budget.time = budgetDetails.time;
      });
    });
  };

  static getBudgets = async timestamps => {
    return await database.collections
      .get('budgets')
      .query(
        Q.where('time', Q.gte(Number(timestamps.current[0]))),
        Q.and(Q.where('time', Q.lte(Number(timestamps.current[1])))),
        Q.sortBy('orderNum'),
      )
      .fetch();
  };

  static getBudgetById = async budgetId => {
    return await database.collections.get('budgets').find(budgetId);
  };
}
