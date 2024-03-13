import { useRouter } from 'next/router';
import styled from 'styled-components';

import { theme } from '../styles/Theme';


export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <StyledSwitcher>
      <select
        onChange={(e) => router.push({}, undefined, { locale: e.target.value, scroll: false })}
        name="Language"
        id="language"
        value={router.locale}
      >
        <option value="en">En</option>
        <option value="ru">Ru</option>
        <option value="pl">Pl</option>
      </select>
    </StyledSwitcher>
  );
}

const StyledSwitcher = styled.div`
  display: flex;

  select {
    position: relative;
    padding: 8px;
    font-size: inherit;
    line-height: inherit;
    border: none;
    background-color: transparent;
    border-radius: 6px;
    cursor: pointer;

    &:focus,
    &:focus-visible {
      outline: 2px solid ${theme.colors.fontShaddy};
    }
  }

  option {
    font-size: inherit;
    border: none;
    background-color: transparent;
    outline: none;
  }
`;
