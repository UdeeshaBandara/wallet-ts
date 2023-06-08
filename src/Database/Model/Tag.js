import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class Tag extends Model {
  static table = 'transactions';
  @field('color') color;
  @field('name') name;
  @field('orderNum') orderNum;
  @field('state') state
  @field('sync') sync;
  @date('last_updated') last_updated;
}
