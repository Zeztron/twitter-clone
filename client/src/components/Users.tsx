import React from 'react';
import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      id
      name
    }
  }
`;

interface User {
  id: number;
  name: string;
}

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.users.map((user: User) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
