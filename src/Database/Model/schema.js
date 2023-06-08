import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'accounts',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'currency', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'icon', type: 'string'},
        {name: 'folderId', type: 'string', isIndexed: true},
        {name: 'orderNum', type: 'string', isIndexed: true},
        {name: 'excluded', type: 'string'},
        {name: 'state', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'account_folders',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'icon', type: 'string'},
        {name: 'orderNum', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'categories',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'icon', type: 'string'},
        {name: 'orderNum', type: 'string', isIndexed: true},
        {name: 'parentCategoryId', type: 'string', isIndexed: true},
        {name: 'type', type: 'string', isIndexed: true},
        {name: 'state', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'transactions',
      columns: [
        {name: 'account_id', type: 'string', isIndexed: true},
        {name: 'type', type: 'string', isIndexed: true},
        {name: 'amount', type: 'string'},
        {name: 'currency', type: 'string'},
        {name: 'time', type: 'number', isIndexed: true},
        {name: 'timeType', type: 'string', isIndexed: true},
        {name: 'title', type: 'string', isOptional: true},
        {name: 'description', type: 'string', isOptional: true},
        {name: 'category_id', type: 'string', isOptional: true, isIndexed: true},
        {name: 'state', type: 'string'},
        {name: 'purpose', type: 'string'},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'trn_links',
      columns: [
        {name: 'from_trn_id', type: 'string', isIndexed: true},
        {name: 'to_trn_id', type: 'string'},
        {name: 'from_account_id', type: 'string'},
        {name: 'to_account_id', type: 'string'},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'trn_metadata',
      columns: [
        {name: 'trn_id', type: 'string', isIndexed: true},
        {name: 'key', type: 'string', isIndexed: true},
        {name: 'value', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'trn_tags',
      columns: [
        {name: 'trn_id', type: 'string', isIndexed: true},
        {name: 'tag_id', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'tags',
      columns: [
        {name: 'color', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'orderNum', type: 'string', isIndexed: true},
        {name: 'state', type: 'string', isIndexed: true},
        {name: 'sync', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name:'user',
      columns: [
        {name: 'email', type: 'string'},
        {name: 'authProviderType', type: 'string'},
        {name: 'firstName', type: 'string', isIndexed: true},
        {name: 'lastName', type: 'string', isIndexed: true},
        {name: 'profilePicture', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'testUser', type: 'boolean', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name:'buffer',
      columns: [
        {name: 'baseCurrency', type: 'string'},
        {name: 'bufferAmount', type: 'string', isIndexed: true},
        {name: 'name', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name:'budgets',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'amount', type: 'string', isIndexed: true},
        {name: 'time', type: 'number', isIndexed: true},
        {name: 'orderNum', type: 'string', isIndexed: true},
        {name: 'last_updated', type: 'number'},
      ],
    }),
    tableSchema({
      name:'budget_categories',
      columns: [
        {name: 'budget_id', type: 'string', isIndexed: true},
        {name: 'category_id', type: 'string', isIndexed: true},
      ],
    })
  ],
});
