import React from "react";
import { useSelector } from "react-redux";

const AdminUsers = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  console.log(users);
  return <div>AdminUsers</div>;
};

export default AdminUsers;
