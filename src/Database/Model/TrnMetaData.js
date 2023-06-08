import {Model} from '@nozbe/watermelondb';
import {date, field} from '@nozbe/watermelondb/decorators';

export default class TrnMetaData extends Model {
  static table = 'trn_metadata';
  @field('trn_id') trn_id;
  @field('key') key;
  @field('value') value;
  @field('sync') sync;
  @date('last_updated') last_updated;
}
