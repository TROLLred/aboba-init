export type TUserInfoResponce = {
  success: boolean;
  data: TUserInfoData;
};

export type TUserInfoData = {
  id: number;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string;
  email: string | null;
  photo: string;
  age: number | null;
  //birthDate: string | null;
  sex: string | null;
  roleId: number | null;
  //place: Place;
};
