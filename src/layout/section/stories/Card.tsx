import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { CustomButton } from '../../../components/CustomButton';
import { font } from '../../../styles/FontSize';
import { theme } from '../../../styles/Theme';


export const Card = ({ i, e }: { i: number; e: string }) => {
  const t = useTranslations("stories");
  return (
    <StyledCard img={require(`../../../assets/imgs/stories/${i + 1}.jpeg`)} key={e}>
      <h3>{t<any>(`stories.${e}.title`)}</h3>
      <Link
        href={`/?modal=true&section=stories&id=${e}`}
        style={{ display: "contents" }}
        scroll={false}
      >
        <CustomButton option="transparent" text="readMore" />
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div<{ img: { default: StaticImageData } }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-basis: 650px;
  height: 400px;
  color: ${theme.colors.colorLight};
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.img.default.src || "check"});
  background-size: cover;
  background-repeat: no-repeat;

  h3 {
    margin: 0 40px 40px 40px;
    color: ${theme.colors.colorLight};
    font-size: ${font(14, 40)};
    text-align: center;
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
