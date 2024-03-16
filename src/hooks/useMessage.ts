import { useMessages } from 'next-intl';


export const useMessageTyped = (): IntlMessages => {
  const message = useMessages() as IntlMessages;
  return message;
};
