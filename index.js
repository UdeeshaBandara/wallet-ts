/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './src/Database/Model/schema';
import migrations from './src/Database/Model/migrations';
import Account from './src/Database/Model/Account';
import AccountFolder from './src/Database/Model/AccountFolder';
import Buffer from './src/Database/Model/Buffer';
import Budget from './src/Database/Model/Budget';
import BudgetCategory from './src/Database/Model/BudgetCategory';
import Category from './src/Database/Model/Category';
import Tag from './src/Database/Model/Tag';
import TrnLinkRecord from './src/Database/Model/TrnLinkRecord';
import Transaction from './src/Database/Model/Transaction';
import TrnMetaData from './src/Database/Model/TrnMetaData';
import TrnTag from './src/Database/Model/TrnTag';
import User from './src/Database/Model/User';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'wallet',
  jsi: false,
  usesExclusiveLocking: true,
  onSetUpError: error => {
    console.log('Database error ', error);
  },
});

// Then, make a Watermelon Database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    Account,
    AccountFolder,
    Buffer,
    Budget,
    BudgetCategory,
    Category,
    Tag,
    Transaction,
    TrnLinkRecord,
    TrnMetaData,
    TrnTag,
    User
  ],
});

AppRegistry.registerComponent(appName, () => App);
