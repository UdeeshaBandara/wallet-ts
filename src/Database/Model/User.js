import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';
import { database } from '../../../index';

export default class User extends Model {
  static table = 'user';
  @field('email') email;
  @field('authProviderType') authProviderType;
  @field('firstName') firstName;
  @field('lastName') lastName;
  @field('profilePicture') profilePicture;
  @field('color') color;
  @field('testUser') testUser;
  @date('last_updated') last_updated;

  static getUser = async () => {
    let user = await database.get('user').query().fetch();

    if (user?.length > 0) {
      return user[0]._raw;
    } else {
      return { firstName: '', id: '' };
    }
  };

  static createUser = async name => {
    return await database.write(async () => {
      const userCollection = database.collections.get('user');
      return await userCollection.create(user => {
        user.firstName = name;
      });
    });
  };

  static updateUser = async (id, newName) => {
    return await database.write(async () => {
      const userCollection = await database.collections.get('user').find(id);
      return await userCollection.update(user => {
        user.firstName = newName;
      });
    });
  };
}
