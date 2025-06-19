type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id:number,
  name: string,
  age: number,
  address:AddressType,

  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((newUsers:UserType) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={newUsers.id} id={`hw01-user-${newUsers.id}`}>
            <strong>{newUsers.name}</strong> (Age: {newUsers.age})<strong> Address:</strong>
            {newUsers.address.street}, {newUsers.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
