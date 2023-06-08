import { Model, Q } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

import { database } from '../../../index';
import { accounts } from '../../Util/Constants';

export default class Account extends Model {
  static table = 'accounts';

  static associations = {
    transactions: { type: 'has_many', foreignKey: 'account_id' },
  };

  @field('name') name;
  @field('currency') currency;
  @field('color') color;
  @field('icon') icon;
  @field('folderId') folderId;
  @field('orderNum') orderNum;
  @field('excluded') excluded;
  @field('state') state;
  @field('sync') sync;
  @date('last_updated') last_updated;

  static getDetailsByAccountId = async (
    filterType,
    timestamps,
    accountId,
    currentDayTimestamp,
  ) => {
    if (filterType.current !== -1) {
      if (filterType.current === 0 || filterType.current === 3) {
        return await database.collections
          .get('accounts')
          .query(
            Q.unsafeSqlQuery(
              "select accounts.*,IFNULL(income,0) as income,IFNULL(expense,0) as expense,(IFNULL(transfer_in,0)  - IFNULL(transfer_out,0) + IFNULL(income_all,0) - IFNULL(expense_all,0) )  as accountBalance, IFNULL(expense_all,0) as expense_all,IFNULL(income_all,0) as income_all, IFNULL(expense_count,0) as expense_count,IFNULL(income_count,0)  as income_count from accounts left join (select sum(amount) as income,account_id from transactions  where type ='1'and time > ? and time < ? and purpose = '0' and account_id = ?) as income_value on income_value.account_id = id left join (select sum(amount) as expense,account_id from transactions  where type ='2' and time > ? and time < ? and purpose = '0' and account_id = ?) as expense_value on expense_value.account_id = id left join (select sum(amount) as transfer_in,account_id from transactions  where purpose ='2' and time < ?  and account_id = ?) as transfer_in_value on transfer_in_value.account_id = id left join (select sum(amount) as transfer_out,account_id from transactions  where purpose ='1' and time < ?  and account_id = ?) as transfer_out_value on transfer_out_value.account_id = id  left join (select sum(amount) as income_all,account_id from transactions where type ='1'and time < ? and (purpose = '0'  or purpose = '3')   and account_id = ?) as income_all_value on income_all_value.account_id = id  left join (select sum(amount) as expense_all,account_id from transactions  where type ='2' and time < ? and (purpose = '0'  or purpose = '3')   and account_id = ?) as expense_all_value on expense_all_value.account_id = id   left join (select count(*) as expense_count,account_id from transactions  where type ='2'  and time > ? and time < ?  and purpose = '0'  and account_id = ?) as expense_count_table on expense_count_table.account_id = id left join (select count(*) as income_count,account_id from transactions  where type ='1' and time > ? and time < ? and purpose = '0'  and account_id = ?) as income_count_table on income_count_table.account_id = id where id=?",
              [
                Number(timestamps[0]),
                Number(timestamps[1]),
                accountId,
                Number(timestamps[0]),
                Number(timestamps[1]),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(timestamps[0]),
                Number(timestamps[1]),
                accountId,
                Number(timestamps[0]),
                Number(timestamps[1]),
                accountId,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType.current === 1) {
        return await database.collections
          .get('accounts')
          .query(
            Q.unsafeSqlQuery(
              "select accounts.*,IFNULL(income,0) as income,IFNULL(expense,0) as expense,(IFNULL(transfer_in,0)  - IFNULL(transfer_out,0) + IFNULL(income_all,0) - IFNULL(expense_all,0) )  as accountBalance, IFNULL(expense_all,0) as expense_all,IFNULL(income_all,0) as income_all, IFNULL(expense_count,0) as expense_count,IFNULL(income_count,0)  as income_count from accounts left join (select sum(amount) as income,account_id from transactions  where type ='1' and time <= ? and purpose = '0' and account_id = ?) as income_value on income_value.account_id = id left join (select sum(amount) as expense,account_id from transactions  where type ='2' and time <= ? and purpose = '0' and account_id = ?) as expense_value on expense_value.account_id = id left join (select sum(amount) as transfer_in,account_id from transactions  where purpose ='2' and time < ?  and account_id = ?) as transfer_in_value on transfer_in_value.account_id = id left join (select sum(amount) as transfer_out,account_id from transactions  where purpose ='1' and time < ?  and account_id = ?) as transfer_out_value on transfer_out_value.account_id = id  left join (select sum(amount) as income_all,account_id from transactions where type ='1'and time < ? and (purpose = '0'  or purpose = '3')  and account_id = ?) as income_all_value on income_all_value.account_id = id  left join (select sum(amount) as expense_all,account_id from transactions  where type ='2' and time < ? and (purpose = '0'  or purpose = '3')   and account_id = ?) as expense_all_value on expense_all_value.account_id = id left join (select count(*) as expense_count,account_id from transactions  where type ='2'  and time <= ?  and purpose = '0'  and account_id = ?) as expense_count_table on expense_count_table.account_id = id left join (select count(*) as income_count,account_id from transactions  where type ='1' and time <= ?and purpose = '0'  and account_id = ?) as income_count_table on income_count_table.account_id = id where id=?",
              [
                Number(timestamps[0]),
                accountId,
                Number(timestamps[0]),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(timestamps[0]),
                accountId,
                Number(timestamps[0]),
                accountId,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      } else if (filterType.current === 2) {
        return await database.collections
          .get('accounts')
          .query(
            Q.unsafeSqlQuery(
              "select accounts.*,IFNULL(income,0) as income,IFNULL(expense,0) as expense,(IFNULL(transfer_in,0)  - IFNULL(transfer_out,0) + IFNULL(income_all,0) - IFNULL(expense_all,0) )  as accountBalance, IFNULL(expense_all,0) as expense_all,IFNULL(income_all,0) as income_all, IFNULL(expense_count,0) as expense_count,IFNULL(income_count,0)  as income_count from accounts left join (select sum(amount) as income,account_id from transactions  where type ='1'and time > ? and purpose = '0' and account_id = ?) as income_value on income_value.account_id = id left join (select sum(amount) as expense,account_id from transactions  where type ='2' and time > ? and purpose = '0' and account_id = ?) as expense_value on expense_value.account_id = id left join (select sum(amount) as transfer_in,account_id from transactions  where purpose ='2' and time < ?  and account_id = ?) as transfer_in_value on transfer_in_value.account_id = id left join (select sum(amount) as transfer_out,account_id from transactions  where purpose ='1' and time < ?  and account_id = ?) as transfer_out_value on transfer_out_value.account_id = id  left join (select sum(amount) as income_all,account_id from transactions where type ='1'and time < ? and (purpose = '0'  or purpose = '3')   and account_id = ?) as income_all_value on income_all_value.account_id = id  left join (select sum(amount) as expense_all,account_id from transactions  where type ='2' and time < ? and (purpose = '0'  or purpose = '3')   and account_id = ?) as expense_all_value on expense_all_value.account_id = id left join (select count(*) as expense_count,account_id from transactions  where type ='2'  and time > ?  and purpose = '0'  and account_id = ?) as expense_count_table on expense_count_table.account_id = id left join (select count(*) as income_count,account_id from transactions  where type ='1' and time > ?and purpose = '0'  and account_id = ?) as income_count_table on income_count_table.account_id = id where id=?",
              [
                Number(timestamps[0]),
                accountId,
                Number(timestamps[0]),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(currentDayTimestamp),
                accountId,
                Number(timestamps[0]),
                accountId,
                Number(timestamps[0]),
                accountId,
                accountId,
              ],
            ),
          )
          .unsafeFetchRaw();
      }
    } else {
      return await database.collections
        .get('accounts')
        .query(
          Q.unsafeSqlQuery(
            "select accounts.*,IFNULL(income,0) as income,IFNULL(expense,0) as expense,(IFNULL(transfer_in,0)  - IFNULL(transfer_out,0) + IFNULL(income_all,0) - IFNULL(expense_all,0) )  as accountBalance, IFNULL(expense_all,0) as expense_all,IFNULL(income_all,0) as income_all, IFNULL(expense_count,0) as expense_count,IFNULL(income_count,0)  as income_count from accounts left join (select sum(amount) as income,account_id from transactions  where type ='1'and purpose = '0' and account_id = ?) as income_value on income_value.account_id = id left join (select sum(amount) as expense,account_id from transactions  where type ='2' and purpose = '0' and account_id = ?) as expense_value on expense_value.account_id = id left join (select sum(amount) as transfer_in,account_id from transactions  where purpose ='2'  and account_id = ?) as transfer_in_value on transfer_in_value.account_id = id left join (select sum(amount) as transfer_out,account_id from transactions  where purpose ='1'  and account_id = ?) as transfer_out_value on transfer_out_value.account_id = id  left join (select sum(amount) as income_all,account_id from transactions where type ='1' and (purpose = '0'  or purpose = '3')    and account_id = ?) as income_all_value on income_all_value.account_id = id  left join (select sum(amount) as expense_all,account_id from transactions  where type ='2' and (purpose = '0'  or purpose = '3')  and account_id = ?) as expense_all_value on expense_all_value.account_id = id left join (select count(*) as expense_count,account_id from transactions  where type ='2'  and purpose = '0'  and account_id = ?) as expense_count_table on expense_count_table.account_id = id left join (select count(*) as income_count,account_id from transactions  where type ='1' and purpose = '0'  and account_id = ?) as income_count_table on income_count_table.account_id = id where id=?",
            [
              accountId,
              accountId,
              accountId,
              accountId,
              accountId,
              accountId,
              accountId,
              accountId,
              accountId,
            ],
          ),
        )
        .unsafeFetchRaw();
    }
  };

  static getAccountsWithExpenseAndIncome = async (
    currentDayTimestamp,
    currentMonthStart,
    currentMonthEnd,
  ) => {
    return await database.collections
      .get('accounts')
      .query(
        Q.unsafeSqlQuery(
          "select accounts.*,IFNULL(income,0) as income,IFNULL(expense,0) as expense,(IFNULL(transfer_in,0)  - IFNULL(transfer_out,0) + IFNULL(income_all,0) - IFNULL(expense_all,0) )  as accountBalance, IFNULL(expense_all,0) as expense_all,IFNULL(income_all,0) as income_all from accounts left join (select sum(amount) as income,account_id from transactions  where type ='1'and time > ? and time < ? and purpose = '0'  group by account_id) as income_value on income_value.account_id = id left join (select sum(amount) as expense,account_id from transactions  where type ='2' and time > ? and time < ? and purpose = '0' group by account_id) as expense_value on expense_value.account_id = id left join (select sum(amount) as transfer_in,account_id from transactions  where purpose ='2' and time < ?  group by account_id) as transfer_in_value on transfer_in_value.account_id = id left join (select sum(amount) as transfer_out,account_id from transactions  where purpose ='1' and time < ?  group by account_id) as transfer_out_value on transfer_out_value.account_id = id  left join (select sum(amount) as income_all,account_id from transactions  where type ='1'and time < ? and (purpose = '0'  or purpose = '3')  group by account_id) as income_all_value on income_all_value.account_id = id  left join (select sum(amount) as expense_all,account_id from transactions  where type ='2' and time < ? and (purpose = '0'  or purpose = '3')  group by account_id) as expense_all_value on expense_all_value.account_id = id order by orderNum",
          [
            Number(currentMonthStart),
            Number(currentMonthEnd),
            Number(currentMonthStart),
            Number(currentMonthEnd),
            Number(currentDayTimestamp),
            Number(currentDayTimestamp),
            Number(currentDayTimestamp),
            Number(currentDayTimestamp),
          ],
        ),
      )
      .unsafeFetchRaw();
  };

  static reOrderAccount = async account => {
    await database.write(async async => {
      const accountCollection = await database.collections
        .get('accounts')
        .find(account.id);
      return await accountCollection.update(acc => {
        acc.orderNum = account.orderNum;
      });
    });
  };

  static deleteAccountById = async accountId => {
    const transactionCollection = await database.collections
      .get('accounts')
      .find(accountId);
    return await transactionCollection.destroyPermanently();
  };

  static updateCurrencyInAllAccounts = async newCurrency => {
    const accountFromDb = await database.get('accounts').query().fetch();
    const operations = [];
    accountFromDb.forEach(singleAccount => {
      operations.push(
        singleAccount.prepareUpdate(singleRecordPrepare => {
          singleRecordPrepare.currency = newCurrency;
        }),
      );
    });
    await database.write(async () => {
      await database.batch(...operations);
    });
  };

  static addAccountsToDb = async (
    item,
    currencySymbol,
    includeAccount = false,
  ) => {
    return await database.write(async async => {
      const accountCollection = database.collections.get('accounts');
      return await accountCollection.create(account => {
        account.name = item.name;
        account.currency = currencySymbol;
        account.color = item.bgColor;
        account.icon = item.icon;
        account.excluded = !includeAccount ? '0' : '1';
      });
    });
  };

  static batchInsertAccounts = async currency => {
    const accountCollection = database.collections.get('accounts');
    const promises = [];
    for (const item of accounts) {
      if (item.name === 'Cash' || item.name === 'Bank') {
        promises.push(
          accountCollection.prepareCreate(account => {
            account.name = item.name;
            account.currency = currency;
            account.color = item.bgColor;
            account.icon = item.icon;
            account.excluded = '0';
          }),
        );
      }
    }
    await database.write(async () => {
      await database.batch(...promises);
    });
  };

  static updateAccountById = async (accountId, accountObj, includeAccount) => {
    await database.write(async async => {
      const accountCollection = await database.collections
        .get('accounts')
        .find(accountId);
      return await accountCollection.update(acc => {
        acc.name = accountObj.name;
        acc.color = accountObj.color;
        acc.currency = accountObj.currency;
        acc.icon = accountObj.icon;
        acc.excluded = includeAccount ? '1' : '0';
      });
    });
  };

  static isAccountExist = async () => {
    const accountFromDb = await database.get('accounts').query().fetch();
    return accountFromDb.length > 0;
  };

  static getAllAccounts = async () => {
    return await database.get('accounts').query().fetch();
  };

  static getAccountsWithTotalBalance = async () => {
    return await database.collections
      .get('accounts')
      .query(
        Q.unsafeSqlQuery(
          'select accounts.*,IFNULL(total,0) as accountBalance from accounts left join (select sum(amount) as total,account_id from transactions group by account_id) as transaction_total on transaction_total.account_id = accounts.id',
          [],
        ),
      )
      .unsafeFetchRaw();
  };
}
