import { uploadPhoto, createUser } from '../node_modules/utils';

export default async function asyncUploadUser() {
  const obj = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    obj.photo = photo;
    obj.user = user;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
  return obj;
}
