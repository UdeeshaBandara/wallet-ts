import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class AccountFolder extends Model {
  static table = 'account_folders';
  @field('name') name;
  @field('color') color;
  @field('icon') icon;

  @field('orderNum') orderNum;


  @field('sync') sync;
  @date('last_updated') last_updated;
}
