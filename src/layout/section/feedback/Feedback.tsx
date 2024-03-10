import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styled from 'styled-components';

import creds from '../../../assets/data/creds';
import { IconStripe } from '../../../assets/IconStripe';
import { Container } from '../../../components/Container';
import { CustomButton } from '../../../components/CustomButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconStripeWrapper } from '../../../components/IconWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { theme } from '../../../styles/Theme';


export const Feedback = () => {
  const t = useTranslations("feedback");
  return (
    <StyledFeedback>
      <Container>
        <TitleSection>{t("title")}</TitleSection>
        <IconStripeWrapper>
          <IconStripe iconId="pluses" />
        </IconStripeWrapper>
        <FlexWrapper justify="space-between">
          <StyledCreds>
            <div>
              <IconStripe iconId="email" height="52px" width="52px" />
              {creds.email}
            </div>
            <div>
              <IconStripe iconId="phone" height="52px" width="52px" />
              {creds.phone}
            </div>
            <div>
              <IconStripe iconId="address" height="52px" width="52px" />
              {creds.address}
            </div>
            <FlexWrapper>
              <Link href={creds.fb}>
                <IconStripe iconId="fb" height="30px" width="30px" />
              </Link>
              <Link href={creds.x}>
                <IconStripe iconId="x" height="30px" width="30px" />
              </Link>
              <Link href={creds.insta}>
                <IconStripe iconId="insta" height="30px" width="30px" />
              </Link>
            </FlexWrapper>
          </StyledCreds>
          <StyledFrom>
            <FlexWrapper direction="column">
              <input type="text" placeholder={t("name")} />
              <input type="text" placeholder={t("phone")} />
              <textarea placeholder={t("introduction")} autoComplete="false" draggable="false" />
              <CustomButton text="send" />
            </FlexWrapper>
          </StyledFrom>
        </FlexWrapper>
      </Container>
    </StyledFeedback>
  );
};

const StyledFeedback = styled.section`
  margin-top: 237px;
  min-height: 691px;
`;

const StyledCreds = styled.div`
  display: flex;
  flex-direction: column;

  padding: 76px 32px 76px 32px;

  background-color: ${theme.colors.colorPrimeLight};
  border-radius: 50px;
`;

const StyledFrom = styled.form``;
