import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class TrnTag extends Model {
  static table = 'trn_tags';
  @field('trn_id') trn_id;
  @field('tag_id') batch_id;
  @field('sync') sync;
  @date('last_updated') last_updated;
}
