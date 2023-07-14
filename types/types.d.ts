type UserCard = UserCardImage &
  UserCardPhone &
  UserCardPosition &
  UserCardEmail & {
    id?: string;
    registration_timestamp?: number;
  };
type UserCardName = {
  name: string;
};
type UserCardImage = UserCardName & {
  photo: string;
};
type UserCardPhone = {
  phone: string;
};
type UserCardPosition = {
  position: string;
  position_id?: string;
};
type UserCardEmail = {
  email: string;
};
type CardContentProps = UserCardName & UserCardPhone & UserCardPosition & UserCardEmail;

type CardUserData = {
  text: string;
};
type UserImageProps = {
  src: string;
  alt: string;
};

type UserPostInit = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: string;
};
