/* eslint-disable react-hooks/exhaustive-deps */

import {  Center,  Spinner,  useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {getUsers, users, loading} = useAllUsers();
  const {onSelectUser, selectedUser} = useSelectUser();
  const {loginUser} = useLoginUser();

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);

  useEffect(() => getUsers(), []);
  
  return (
    <>
      {loading ? (
        <Center
          h="100vh">
          <Spinner/>
        </Center>
       ) : (
      <Wrap
        p={{ base: 4, md: 10}}>
        {users.map((user) => (
          <WrapItem
            mx='auto'
            key={user.id} >
            <UserCard
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser} />
          </WrapItem>
        ))}
      </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
        />
    </>
  )
});