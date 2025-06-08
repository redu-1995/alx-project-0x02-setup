
import { UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
