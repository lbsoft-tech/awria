export class UserProfile {
  _id: string;
  user_id: string;
  country: string;
  about: string;
  profile_photo: string;
  shipping?: {
    name: string,
    address: string,
    city: string,
    country: string,
    state: string,
    postcode: string,
    apartment: string,
  };
}
