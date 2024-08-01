import {
  Domyland,
  UserInfoFields,
  ApiResponse,
  User,
  // eslint-disable-next-line @conarti/feature-sliced/absolute-relative
} from '@domyland-shared/mini-app-sdk';

const DOMYLAND_TOKEN = import.meta.env.VITE_DOMYLAND_TOKEN;
if (!new URLSearchParams(location.search).get('token') && DOMYLAND_TOKEN) {
  localStorage.setItem('token', DOMYLAND_TOKEN);
}

Domyland.init();

const userInfoFields = [
  'age',
  'email',
  'firstName',
  'id',
  'lastName',
  'phoneNumber',
  'photo',
  'placeId',
  'roleId',
  'sex',
] as UserInfoFields[];
export const getDomylandUserInfo = () =>
  Domyland.miniApp.userInfo(userInfoFields) as Promise<ApiResponse<User>>;

// export const getDomylandUserInfo = ():Promise<{ phoneNumber:string,name:string }> => new Promise((resolve) => {
//     resolve({ phoneNumber:'7951171114',name:"Евгений"})
// })
