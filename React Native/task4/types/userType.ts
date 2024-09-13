export type userType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
};
