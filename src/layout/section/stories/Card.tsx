import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { CustomButton } from '../../../components/CustomButton';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Card = ({ i, e }: { i: number; e: string }) => {
  const t = useTranslations("stories");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/?modal=true&section=stories&id=${e}`, { scroll: false });
  };

  return (
    <StyledCard key={e}>
      <Image
        src={require(`../../../assets/imgs/stories/${i + 1}.jpeg`)}
        alt={t<any>(`stories.${e}.title`)}
        quality={100}
      />
      <h3>{t<any>(`stories.${e}.title`)}</h3>
      <CustomButton option="transparent" text="readMore" onClick={handleClick} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-basis: 650px;
  height: 400px;
  color: ${theme.colors.colorLight};
  background-size: cover;
  background-repeat: no-repeat;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    object-fit: cover;
    filter: brightness(0.4);
  }

  h3 {
    margin: 0 40px 40px 40px;
    color: ${theme.colors.colorLight};
    font-size: ${font(14, 40)};
    text-align: center;
    position: relative;
  }

  button {
    position: relative;
  }

  @media ${theme.media.desktop} {
    height: 321px;
  }

  @media ${theme.media.tablet} {
    height: 234px;
    h3 {
      margin: 0 20px 20px 20px;
    }
  }
  @media ${theme.media.mobile} {
    height: 200px;

    h3 {
      font-size: ${font(22, 28)};
    }
  }
`;
