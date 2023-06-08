import { Model, Q } from '@nozbe/watermelondb';
import { immutableRelation } from '@nozbe/watermelondb/decorators';
import { database } from '../../../index';

export default class BudgetCategory extends Model {
  static table = 'budget_categories';

  static associations = {
    budgets: { type: 'belongs_to', foreignKey: 'budget_id' },
    categories: { type: 'belongs_to', foreignKey: 'category_id' },
  };

  @immutableRelation('budgets', 'budget_id') budget;
  @immutableRelation('categories', 'category_id') category;

  static createBudgetCategory = async (budgetId, budgetCategoryDetails) => {
    return await database.write(async () => {
      const budgetAndCategoryCollection =
        database.collections.get('budget_categories');
      await budgetAndCategoryCollection.create(budgetCategory => {
        budgetCategory.budget.id = budgetId;
        budgetCategory.category.id = budgetCategoryDetails;
      });
    });
  };

  static getAllBudgetCategories = async () => {
    return await database
      .get('budget_categories')
      .query(
        Q.unsafeSqlQuery(
          'select * from budget_categories inner join categories on budget_categories.category_id = categories.id',
          [],
        ),
      )
      .unsafeFetchRaw();
  };

  static getBudgetCategoriesByBudgetId = async budgetId => {
    return await database.collections
      .get('budget_categories')
      .query(Q.where('budget_id', budgetId))
      .fetch();
  };
}
