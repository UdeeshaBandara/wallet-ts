import { Model, Q } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

import { database } from '../../../index';

export default class TrnLinkRecord extends Model {
  static table = 'trn_links';
  @field('from_trn_id') from_trn_id;
  @field('to_trn_id') to_trn_id;
  @field('from_account_id') from_account_id;
  @field('to_account_id') to_account_id;
  @field('sync') sync;
  @date('last_updated') last_updated;

  static getFromTransactionIds = async accountId => {
    return await database.collections
      .get('trn_links')
      .query(
        Q.unsafeSqlQuery(
          'SELECT from_trn_id AS transaction_ids FROM trn_links where from_account_id = ? or to_account_id = ?',
          [accountId, accountId],
        ),
      )
      .unsafeFetchRaw();
  };

  static getToTransactionIds = async accountId => {
    return await database.collections
      .get('trn_links')
      .query(
        Q.unsafeSqlQuery(
          'SELECT to_trn_id AS transaction_ids FROM trn_links where from_account_id = ? or to_account_id = ?',
          [accountId, accountId],
        ),
      )
      .unsafeFetchRaw();
  };

  static getSenderAccountTransactions = async accountId => {
    return await database.collections
      .get('trn_links')
      .query(Q.where('to_account_id', accountId))
      .fetch();
  };
  static deleteTransferOutTransaction = async accountId => {
    await database.collections
      .get('trn_links')
      .query(Q.where('to_account_id', accountId))
      .destroyAllPermanently();
  };

  static receiverAccountTransactions = async accountId => {
    return await database.collections
      .get('trn_links')
      .query(Q.where('from_account_id', accountId))
      .fetch();
  };

  static createTransactionLink = async transactionLink => {
    return await database.write(async async => {
      const transactionLinkCollection = database.collections.get('trn_links');

      await transactionLinkCollection.create(trnLink => {
        trnLink.from_trn_id = transactionLink.fromTransactionId;
        trnLink.to_trn_id = transactionLink.toTransactionId;
        trnLink.from_account_id = transactionLink.fromAccountId;
        trnLink.to_account_id = transactionLink.toAccountId;
      });
    });
  };

  static updateTransactionLink = async transactionLink => {
    return await database.write(async async => {
      const transactionLinkCollection = await database.collections
        .get('trn_links')
        .query(
          Q.where('from_trn_id', transactionLink.fromTransactionId),
          Q.where('to_trn_id', transactionLink.toTransactionId),
        )
        .fetch();

      await transactionLinkCollection[0].update(trnLink => {
        trnLink.from_trn_id = transactionLink.fromTransactionId;
        trnLink.to_trn_id = transactionLink.toTransactionId;
        trnLink.from_account_id = transactionLink.fromAccountId;
        trnLink.to_account_id = transactionLink.toAccountId;
      });
    });
  };
}
