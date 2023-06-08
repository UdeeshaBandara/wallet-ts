import { Model, Q } from '@nozbe/watermelondb';
import { date, field, relation } from '@nozbe/watermelondb/decorators';

import { database } from '../../../index';

import TrnLinkRecord from './TrnLinkRecord';

export default class Transaction extends Model {
  static table = 'transactions';
  static associations = {
    accounts: { type: 'has', key: 'account_id' },
    categories: { type: 'belongs_to', key: 'category_id' },
  };
  @relation('accounts', 'account_id') account;
  @field('type') type;
  @field('amount') amount;
  @field('currency') currency;
  @field('time') time;
  @field('timeType') timeType;
  @field('title') title;
  @field('description') description;
  @relation('categories', 'category_id') category;
  @field('state') state;
  @field('purpose') purpose;
  @field('sync') sync;
  @date('last_updated') last_updated;

  static getTransactionsByAccount = async (
    accountId,
    filterType,
    timestamps,
  ) => {
    let fromTransactionIds = await TrnLinkRecord.getFromTransactionIds(
      accountId,
    );

    let toTransactionIds = await TrnLinkRecord.getToTransactionIds(accountId);

    fromTransactionIds = fromTransactionIds.map(a => a.transaction_ids);
    toTransactionIds = toTransactionIds.map(a => a.transaction_ids);

    if (filterType.current !== -1) {
      if (filterType.current === 0 || filterType.current === 3) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where(
              'time',
              Q.between(Number(timestamps[0]), Number(timestamps[1])),
            ),
            Q.or(
              Q.where('id', Q.oneOf(fromTransactionIds)),
              Q.where('id', Q.oneOf(toTransactionIds)),
              Q.and(Q.where('account_id', accountId), Q.where('purpose', '0')),
            ),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (filterType.current === 1) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.lte(Number(timestamps[0]))),
            Q.or(
              Q.where('id', Q.oneOf(fromTransactionIds)),
              Q.where('id', Q.oneOf(toTransactionIds)),
              Q.and(Q.where('account_id', accountId), Q.where('purpose', '0')),
            ),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (filterType.current === 2) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.gte(Number(timestamps[0]))),
            Q.or(
              Q.where('id', Q.oneOf(fromTransactionIds)),
              Q.where('id', Q.oneOf(toTransactionIds)),
              Q.and(Q.where('account_id', accountId), Q.where('purpose', '0')),
            ),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      }
    } else {
      return await database.collections
        .get('transactions')
        .query(
          Q.or(
            Q.where('id', Q.oneOf(fromTransactionIds)),
            Q.where('id', Q.oneOf(toTransactionIds)),
            Q.and(Q.where('account_id', accountId), Q.where('purpose', '0')),
          ),
          Q.sortBy('time', Q.desc),
        )
        .fetch();
    }
  };

  static getTransactionsByCategory = async (
    categoryId,
    filterType,
    timestamps,
  ) => {
    if (filterType.current !== -1) {
      if (filterType.current === 0 || filterType.current === 3) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where(
              'time',
              Q.between(Number(timestamps[0]), Number(timestamps[1])),
            ),
            Q.where('category_id', categoryId),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (filterType.current === 1) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.lte(Number(timestamps[0]))),
            Q.where('category_id', categoryId),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (filterType.current === 2) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.gte(Number(timestamps[0]))),
            Q.where('category_id', categoryId),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      }
    } else {
      return await database.collections
        .get('transactions')
        .query(Q.where('category_id', categoryId), Q.sortBy('time', Q.desc))
        .fetch();
    }
  };

  static getTransactionsGroupByCategory = async (
    type,
    filterType,
    timestamps,
    currency,
  ) => {
    if (filterType !== -1) {
      if (filterType === 0 || filterType === 3) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND (time >= ? AND time <= ?) AND accounts.currency = ? AND accounts.excluded = '0' group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
              [
                type === 'income' ? '1' : '2',
                Number(timestamps[0]),
                Number(timestamps[1]),
                currency,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType === 1) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND time <= ? AND accounts.currency = ? AND accounts.excluded = '0' group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
              [type === 'income' ? '1' : '2', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType === 2) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND time > ? AND accounts.currency = ? AND accounts.excluded = '0' group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
              [type === 'income' ? '1' : '2', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();
      }
    } else {
      return await database.collections
        .get('transactions')
        .query(
          Q.unsafeSqlQuery(
            "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND accounts.currency = ? AND accounts.excluded = '0' group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
            [type === 'income' ? '1' : '2', currency],
          ),
        )
        .unsafeFetchRaw();
    }
  };

  static getTransactionsFilterByType = async (
    type,
    filterType,
    timestamps,
    currency,
    accountId,
  ) => {
    if (filterType !== -1) {
      if (filterType === 0 || filterType === 3) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND (time >= ? AND time <= ?) AND accounts.currency = ? AND transactions.account_id = ? group by category_id order by time) total on total.category_id = categories.id and state = '1' order by total desc",
              [
                type === 'income' ? '1' : '2',
                Number(timestamps[0]),
                Number(timestamps[1]),
                currency,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType === 1) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND time <= ? AND accounts.currency = ? AND transactions.account_id = ? group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
              [
                type === 'income' ? '1' : '2',
                Number(timestamps[0]),
                currency,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType === 2) {
        return await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND time > ? AND accounts.currency = ? AND transactions.account_id = ? group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
              [
                type === 'income' ? '1' : '2',
                Number(timestamps[0]),
                currency,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      }
    } else {
      return await database.collections
        .get('transactions')
        .query(
          Q.unsafeSqlQuery(
            "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND accounts.currency = ? AND transactions.account_id = ? group by category_id order by time) total on total.category_id = categories.id and state = '1'  order by total desc",
            [type === 'income' ? '1' : '2', currency, accountId],
          ),
        )
        .unsafeFetchRaw();
    }
  };

  static deleteNonTransferTransactions = async accountId => {
    return await database.collections
      .get('transactions')
      .query(Q.where('account_id', accountId), Q.where('purpose', Q.notEq('2')))
      .destroyAllPermanently();
  };

  static deleteTransferOutTransactions = async transactionIds => {
    await database.collections
      .get('transactions')
      .query(Q.where('id', Q.oneOf(transactionIds)))
      .destroyAllPermanently();
  };

  static getSenderTransactionFromParent =
    async transactionIds => {
      return await database.collections
        .get('transactions')
        .query(Q.where('id', Q.oneOf(transactionIds)))
        .fetch();
    };

  static getHomeScreenTransactions = async (type, timestamps) => {
    if (type !== -1) {
      if (type === 0 || type === 3) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where(
              'time',
              Q.between(Number(timestamps[0]), Number(timestamps[1])),
            ),
            Q.where('purpose', Q.notEq('3')),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (type === 1) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.lte(Number(timestamps[0]))),
            Q.where('purpose', Q.notEq('3')),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      } else if (type === 2) {
        return await database.collections
          .get('transactions')
          .query(
            Q.where('time', Q.gte(Number(timestamps[0]))),
            Q.where('purpose', Q.notEq('3')),
            Q.sortBy('time', Q.desc),
          )
          .fetch();
      }
    } else {
      return await database.collections
        .get('transactions')
        .query(Q.where('purpose', Q.notEq('3')), Q.sortBy('time', Q.desc))
        .fetch();
    }
  };

  static getTransactionForSearch = async () => {
    return await database.collections
      .get('transactions')
      .query(
        Q.where('purpose', Q.notEq('3')),
        Q.where('title', Q.notEq('')),
        Q.sortBy('time', Q.desc),
      )
      .fetch();
  };

  static getCashFlowAmount = async (type, timestamps, currency) => {
    let incomeTransactions = [];
    let expenseTransactions = [];
    if (type !== -1) {
      if (type === 0 || type === 3) {
        incomeTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0'  AND (time >= ? AND time <= ?) AND accounts.excluded = '0' AND accounts.currency = ?",
              ['1', Number(timestamps[0]), Number(timestamps[1]), currency],
            ),
          )
          .unsafeFetchRaw();

        expenseTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0' AND (time >= ? AND time <= ?) AND accounts.excluded = '0' AND accounts.currency = ?",
              ['2', Number(timestamps[0]), Number(timestamps[1]), currency],
            ),
          )
          .unsafeFetchRaw();
      } else if (type === 1) {
        incomeTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0' AND time <= ? AND accounts.excluded = '0' AND accounts.currency = ?",
              ['1', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();

        expenseTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0' AND time <= ? AND accounts.excluded = '0' AND accounts.currency = ?",
              ['2', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();
      } else if (type === 2) {
        incomeTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0' AND time > ? AND accounts.excluded = '0' AND accounts.currency = ?",
              ['1', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();

        expenseTransactions = await database.collections
          .get('transactions')
          .query(
            Q.unsafeSqlQuery(
              "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id where type = ? AND purpose = '0' AND time > ? AND accounts.excluded = '0' AND accounts.currency = ?",
              ['2', Number(timestamps[0]), currency],
            ),
          )
          .unsafeFetchRaw();
      }
    } else {
      incomeTransactions = await database.collections
        .get('transactions')
        .query(
          Q.unsafeSqlQuery(
            "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id  where type = ? AND purpose = '0' AND accounts.excluded = '0' AND accounts.currency = ?",
            ['1', currency],
          ),
        )
        .unsafeFetchRaw();

      expenseTransactions = await database.collections
        .get('transactions')
        .query(
          Q.unsafeSqlQuery(
            "select sum(amount) as total from transactions inner join accounts on transactions.account_id=accounts.id  where type = ? AND purpose = '0' AND accounts.excluded = '0' AND accounts.currency = ?",
            ['2', currency],
          ),
        )
        .unsafeFetchRaw();
    }
    return { incomeTransactions, expenseTransactions };
  };

  static getTransactionsExcludingBalanceTransactions = async () => {
    return await database.collections
      .get('transactions')
      .query(Q.where('purpose', Q.notEq('3')), Q.sortBy('time', Q.desc))
      .fetch();
  };
  static createTransaction = async transactionToCreate => {
    return await database.write(async async => {
      const transactionCollection = database.collections.get('transactions');
      return await transactionCollection.create(transaction => {
        transaction.account.id = transactionToCreate.accountId;
        transaction.type = transactionToCreate.type;
        transaction.amount = transactionToCreate.amount;
        transaction.currency = transactionToCreate.currency;
        transaction.time = transactionToCreate.time;
        transaction.title = transactionToCreate.title;
        transaction.description = transactionToCreate.description;
        transaction.category.id = transactionToCreate.categoryId;
        transaction.purpose = transactionToCreate.purpose;
      });
    });
  };

  static updateTransactionById = async updatingTransaction => {
    return await database.write(async async => {
      const transactionCollection = await database.collections
        .get('transactions')
        .find(updatingTransaction.id);

      return await transactionCollection.update(transaction => {
        transaction.account.id = updatingTransaction.accountId;
        transaction.type = updatingTransaction.type;
        transaction.amount = updatingTransaction.amount;
        transaction.currency = updatingTransaction.currency;
        transaction.time = updatingTransaction.time;
        transaction.title = updatingTransaction.title;
        transaction.description = updatingTransaction.description;
        transaction.category.id = updatingTransaction.categoryId;
        transaction.purpose = updatingTransaction.purpose;
      });
    });
  };
  static deleteTransactionById = async transactionId => {
    await database.write(async async => {
      const transactionCollection = await database.collections
        .get('transactions')
        .find(transactionId);
      return await transactionCollection.destroyPermanently();
    });
  };
  static getExpensesForBudget = async (timestamps, currency) => {
    return await database.collections
      .get('transactions')
      .query(
        Q.unsafeSqlQuery(
          "select * from categories inner join (select sum(amount) as total, accounts.currency, category_id from transactions inner join accounts on accounts.id = transactions.account_id where type = ? AND purpose = '0' AND (time >= ? AND time <= ?) AND accounts.currency = ? AND accounts.excluded = '0' group by category_id order by time) total on total.category_id = categories.id",
          [
            '2',
            Number(timestamps.current[0]),
            Number(timestamps.current[1]),
            currency,
          ],
        ),
      )
      .unsafeFetchRaw();
  };
}
