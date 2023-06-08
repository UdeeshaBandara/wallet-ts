import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';
import { database } from '../../../index';

export default class Buffer extends Model {
  static table = 'buffer';
  @field('baseCurrency') baseCurrency;
  @field('bufferAmount') bufferAmount;
  @field('name') name;
  @date('last_updated') last_updated;

  static updateBufferAmount = async newAmount => {
    let bufferResponse = await database.get('buffer').query().fetch();

    return await database.write(async () => {
      const bufferCollection = await database.collections
        .get('buffer')
        .find(bufferResponse[0]._raw.id);
      return await bufferCollection.update(buffer => {
        buffer.bufferAmount = newAmount;
      });
    });
  };

  static getBufferAmount = async () => {
    return await database.get('buffer').query().fetch();
  };

  static addBufferAmountToDb = async currencyForBuffer => {
    let bufferResponse = await database.get('buffer').query().fetch();

    if (bufferResponse?.length > 0) {
      if (bufferResponse[0]._raw.baseCurrency !== currencyForBuffer) {
        return await database.write(async () => {
          const bufferCollection = await database.collections
            .get('buffer')
            .find(bufferResponse[0]._raw.id);
          return await bufferCollection.update(buffer => {
            buffer.baseCurrency = currencyForBuffer;
          });
        });
      }
    } else {
      if (currencyForBuffer !== '' || currencyForBuffer !== undefined) {
        return await database.write(async () => {
          const bufferCollection = database.collections.get('buffer');
          return await bufferCollection.create(buffer => {
            buffer.bufferAmount = '1000.00';
            buffer.baseCurrency = currencyForBuffer;
          });
        });
      }
    }
  };
}
