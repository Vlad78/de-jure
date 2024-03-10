import creds from '../assets/data/creds';
import { IconStripe } from '../assets/IconStripe';
import { theme } from '../styles/Theme';
import { FlexWrapper } from './FlexWrapper';


type Menu = {
  icons: "no" | "gray" | "circle";
};

export const Menu = ({ icons }: Menu) => {
  const size = icons === "gray" ? "21px" : "52px";
  return (
    <>
      <div>
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`email${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
          />
        )}
        {creds.email}
      </div>
      <div>
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`phone${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
          />
        )}
        {creds.phone}
      </div>
      <div>
        {icons === "no" ? (
          ""
        ) : (
          <IconStripe
            iconId={`address${icons === "gray" ? "" : "-circle"}`}
            height={size}
            width={size}
            fill={theme.colors.fontShaddy}
          />
        )}
        {creds.address}
      </div>
    </>
  );
};
