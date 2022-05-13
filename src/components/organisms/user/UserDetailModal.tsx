import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../types/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
};


export const UserDetailModal: FC<Props> = memo((props) => {
  const {user, isOpen, onClose, isAdmin = false } = props;

  const onClickUpdate = () => alert();

  const [username, setUsername] = useState(user?.username);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  return (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    autoFocus={false}
    motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent
      pb={6}>
      <ModalHeader>ユーザ詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input
              value={username}
              isReadOnly={!isAdmin} 
              onChange={onChangeUsername}/>
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input
              value={name}
              isReadOnly={!isAdmin}
              onChange={onChangeName} />
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input 
              value={email}
              isReadOnly={!isAdmin}
              onChange={onChangeEmail} />
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input
              value={phone}
              isReadOnly={!isAdmin}
              onChange={onChangePhone} />
          </FormControl>
        </Stack>
      </ModalBody>
      { isAdmin &&(
      <ModalFooter>
        <PrimaryButton
          onClick={onClickUpdate}>更新</PrimaryButton>
      </ModalFooter>
      )}
    </ModalContent>
  </Modal>
  )
})