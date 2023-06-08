import { Model, Q } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';
import { database } from '../../../index';
import { categories } from '../../Util/Constants';

export default class Category extends Model {
  static table = 'categories';
  static associations = {
    budget_categories: { type: 'has_many', foreignKey: 'category_id' },
  };

  @field('name') name;
  @field('color') color;
  @field('icon') icon;
  @field('orderNum') orderNum;
  @field('parentCategoryId') parentCategoryId;
  @field('type') type;
  @field('state') state;
  @field('sync') sync;
  @date('last_updated') last_updated;

  static getDetailsByCategoryId = async (
    filterType,
    timestamps,
    categoryId,
    currency,
  ) => {
    if (filterType.current !== -1) {
      if (filterType.current === 0 || filterType.current === 3) {
        return await database.collections
          .get('categories')
          .query(
            Q.unsafeSqlQuery(
              "select categories.*, IFNULL(income,0) as income, IFNULL(expense,0) as expenses, (IFNULL(income,0)  - IFNULL(expense,0)) as accountBalance, IFNULL(income_count,0) as income_count , IFNULL(expense_count,0) as expense_count from categories left join (select sum(amount) as income,category_id, count(transactions.id) as income_count from transactions inner join accounts on accounts.id  = transactions.account_id where transactions.type ='1' and transactions.purpose = '0' and transactions.time > ? and transactions.time < ?  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as income_value on income_value.category_id = categories.id left join (select sum(amount) as expense,category_id, count(transactions.id) as expense_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='2' and transactions.purpose = '0' and transactions.time > ? and transactions.time < ?  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as expense_value on expense_value.category_id = categories.id where categories.id = ? and categories.state = '1'",
              [
                Number(timestamps[0]),
                Number(timestamps[1]),
                categoryId,
                currency,
                Number(timestamps[0]),
                Number(timestamps[1]),
                categoryId,
                currency,
                categoryId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType.current === 1) {
        return await database.collections
          .get('categories')
          .query(
            Q.unsafeSqlQuery(
              "select categories.*, IFNULL(income,0) as income, IFNULL(expense,0) as expenses, (IFNULL(income,0)  - IFNULL(expense,0)) as accountBalance, IFNULL(income_count,0) as income_count , IFNULL(expense_count,0) as expense_count from categories left join (select sum(amount) as income,category_id, count(transactions.id) as income_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='1' and transactions.purpose = '0' and transactions.time <= ?  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as income_value on income_value.category_id = categories.id left join (select sum(amount) as expense,category_id, count(transactions.id) as expense_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='2' and transactions.purpose = '0' and transactions.time <= ? and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as expense_value on expense_value.category_id = categories.id where categories.id = ? and categories.state = '1'",
              [
                Number(timestamps[0]),
                categoryId,
                currency,
                Number(timestamps[0]),
                categoryId,
                currency,
                categoryId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType.current === 2) {
        return await database.collections
          .get('categories')
          .query(
            Q.unsafeSqlQuery(
              "select categories.*, IFNULL(income,0) as income, IFNULL(expense,0) as expenses, (IFNULL(income,0)  - IFNULL(expense,0)) as accountBalance, IFNULL(income_count,0) as income_count , IFNULL(expense_count,0) as expense_count from categories left join (select sum(amount) as income,category_id , count(transactions.id) as income_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='1' and transactions.purpose = '0' and transactions.time > ?  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as income_value on income_value.category_id = categories.id left join (select sum(amount) as expense,category_id, count(transactions.id) as expense_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='2' and transactions.purpose = '0' and transactions.time > ?  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as expense_value on expense_value.category_id = categories.id where categories.id = ? and categories.state = '1'",
              [
                Number(timestamps[0]),
                categoryId,
                currency,
                Number(timestamps[0]),
                categoryId,
                currency,
                categoryId,
              ],
            ),
          )
          .unsafeFetchRaw();
      }
    } else {
      return await database.collections
        .get('categories')
        .query(
          Q.unsafeSqlQuery(
            "select categories.*, IFNULL(income,0) as income, IFNULL(expense,0) as expenses, (IFNULL(income,0)  - IFNULL(expense,0)) as accountBalance, IFNULL(income_count,0) as income_count , IFNULL(expense_count,0) as expense_count from categories left join (select sum(amount) as income,category_id, count(transactions.id) as income_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='1' and transactions.purpose = '0'  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as income_value on income_value.category_id = categories.id left join (select sum(amount) as expense,category_id, count(transactions.id) as expense_count from transactions  inner join accounts on accounts.id  = transactions.account_id where transactions.type ='2' and transactions.purpose = '0'  and transactions.category_id = ? and accounts.currency = ? group by transactions.category_id) as expense_value on expense_value.category_id = categories.id where categories.id = ? and categories.state = '1'",
            [categoryId, currency, categoryId, currency, categoryId],
          ),
        )
        .unsafeFetchRaw();
    }
  };

  static getCategoryWithExpenseAndIncome = async (
    currentMonthStart,
    currentMonthEnd,
    currency,
  ) => {
    return await database.collections
      .get('accounts')
      .query(
        Q.unsafeSqlQuery(
          "select categories.*, IFNULL(income,0) as income, IFNULL(expense,0) as expenses, (IFNULL(income,0)  - IFNULL(expense,0)) as accountBalance from categories left join (select sum(amount) as income,category_id from transactions inner join accounts on accounts.id = transactions.account_id where transactions.type ='1' and transactions.purpose = '0' and transactions.time > ? and transactions.time < ? and accounts.currency = ? group by transactions.category_id) as income_value on income_value.category_id = categories.id left join (select sum(amount) as expense,category_id from transactions inner join accounts on accounts.id = transactions.account_id  where transactions.type ='2' and transactions.purpose = '0' and transactions.time > ? and transactions.time < ? and accounts.currency = ? group by transactions.category_id) as expense_value on expense_value.category_id = categories.id where categories.id != '11' and state = '1' order by orderNum",
          [
            Number(currentMonthStart),
            Number(currentMonthEnd),
            currency,
            Number(currentMonthStart),
            Number(currentMonthEnd),
            currency,
          ],
        ),
      )
      .unsafeFetchRaw();
  };

  static reOrderCategory = async category => {
    const categoryCollection = await database.collections
      .get('categories')
      .find(category.id);
    await database.write(async () => {
      return await categoryCollection.update(cate => {
        cate.orderNum = category.orderNum;
      });
    });
  };

  static softDeleteCategory = async categoryId => {
    await database.write(async async => {
      const deletingCategory = await database.collections
        .get('categories')
        .find(categoryId);

      return await deletingCategory.update(category => {
        category.state = '0';
      });
    });
  };

  static getCategoryById = async categoryId => {
    return await database.collections.get('categories').find(categoryId);
  };

  static addCategoryToDb = async categoryItem => {
    return await database.write(async async => {
      const categoryCollection = database.collections.get('categories');
      return await categoryCollection.create(category => {
        if (categoryItem.id !== undefined) {
          category._raw.id = categoryItem.id.toString();
        }
        category.name = categoryItem.name;
        category.color = categoryItem.color;
        category.icon = categoryItem.icon;
        category.type = '0';
        category.state = '1';
      });
    });
  };

  static batchInsertCategories = async () => {
    let promises = [];
    for (const item of categories) {
      if (item.id !== 11) {
        const categoryCollection = database.collections.get('categories');
        promises.push(
          categoryCollection.prepareCreate(category => {
            category._raw.id = item.id.toString();
            category.name = item.name;
            category.color = item.color;
            category.icon = item.icon;
            category.type = '0';
            category.state = '1';
          }),
        );
      }
    }
    await database.write(async () => {
      return await database.batch(...promises);
    });
  };

  static updateCategoryById = async (categoryId, categoryItem) => {
    return await database.write(async async => {
      const categoryCollection = await database.collections
        .get('categories')
        .find(categoryId);
      return await categoryCollection.update(category => {
        category.name = categoryItem.name;
        category.color = categoryItem.color;
        category.icon = categoryItem.icon;
      });
    });
  };

  static getAllCategories = async () => {
    return await database.get('categories').query().fetch();
  };

  static getAllActiveCategories = async () => {
    return await database
      .get('categories')
      .query(Q.where('state', '1'))
      .fetch();
  };
}
