import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { useMyStore } from '../../../store/store';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Form = () => {
  const t = useTranslations("feedback");
  const { message, name, phone, setMessage, setName, setPhone } = useMyStore();
  return (
    <StyledFrom>
      <FlexWrapper wrap="wrap" gap="40px" align="start" justify="end" height="unset">
        <input
          type="text"
          placeholder={t("name")}
          name="Name"
          id="name"
          value={name}
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder={t("phone")}
          name="Phone"
          id="phone"
          value={phone}
          autoComplete="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder={t("introduction")}
          autoComplete="false"
          draggable="false"
          name="Message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <CustomButton text="send" />
      </FlexWrapper>
    </StyledFrom>
  );
};

const StyledFrom = styled.form`
  flex-grow: 1;
  flex-basis: 57%;

  input,
  textarea {
    min-width: 210px;
    border-bottom: 1px solid ${theme.colors.font};
    background-color: transparent;

    font-size: ${font(14, 22)};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-align: left;
  }

  input#name {
    flex-grow: 1;
    height: 45px;
  }
  input#phone {
    flex-grow: 1;
    height: 45px;
  }
  textarea {
    flex-basis: 100%;
    flex-grow: 1;
    height: 175px;
    resize: none;
  }

  button {
    margin-top: 110px;
  }

  @media ${theme.media.desktop} {
    button {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 900px) {
    ${FlexWrapper} {
      gap: calc(max(40px, 13%));
    }

    button {
      margin-top: 60px;
    }
  }
`;
