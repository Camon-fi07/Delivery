import { CardData } from 'shared/UI/card/card.types';
import { Address } from 'shared/types/Point';
import { UserDeliveryInfo } from 'shared/types/User';

export const translateUserInfo = (user: UserDeliveryInfo): CardData[] => {
  return [
    {
      name: 'ФИО',
      value: `${user.lastname} ${user.firstname} ${user.middlename}`,
    },
    {
      name: 'Телефон',
      value: `${user.phone}`,
    },
  ];
};

export const translateAddress = (address: Address): CardData[] => {
  return [
    {
      name: 'Адрес',
      value: `ул. ${address.street}, д. ${address.house} ${address.appartament && `кв. ${address.appartament}`}`,
    },
    {
      name: 'Заметка',
      value: `${address.comment || '-'}`,
    },
  ];
};
