import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import styled from "styled-components";

import { CustomButton } from "../../../components/CustomButton";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { useMyStore } from "../../../store/store";
import { theme } from "../../../styles/Theme";

export const Form = () => {
  const t = useTranslations("feedback");
  const { message, name, phone, setMessage, setName, setPhone } = useMyStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<"" | "message" | "name" | "phone">("");

  const onClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const notifyUser = (status: "ok" | "error") => {
      switch (status) {
        case "error":
          router.push("/?modal=true&section=feedback&status=" + status, { scroll: false });
          break;
        case "ok":
          setMessage("");
          setName("");
          setPhone("");
          router.push("/?modal=true&section=feedback&status=" + status, { scroll: false });
          break;
      }
    };

    const validateInput = (text: string | undefined) => {
      const status = text === undefined || text.length === 0 ? "error" : "ok";
      return status;
    };

    const validateAndSetError = (input: string, type: "message" | "name" | "phone") => {
      const status = validateInput(input);
      if (status === "error") {
        setError(type);
        setIsLoading(false);
        return true;
      }
      return false;
    };

    if (validateAndSetError(message, "message")) return;
    if (validateAndSetError(name, "name")) return;
    if (validateAndSetError(phone, "phone")) return;

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ message, name, phone }),
      });
      const data = await response.json();

      notifyUser(data.status);
    } catch (error) {
      notifyUser("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (type: "message" | "name" | "phone", value: string) => {
    switch (type) {
      case "message":
        setMessage(value);
        break;
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
    setError("");
  };

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
          onChange={(e) => handleChange("name", e.target.value)}
          disabled={isLoading}
          className={error === "name" ? "error" : ""}
        />
        <input
          type="tel"
          placeholder={t("phone")}
          name="Phone"
          id="phone"
          value={phone}
          autoComplete="tel"
          onChange={(e) => handleChange("phone", e.target.value)}
          disabled={isLoading}
          className={error === "phone" ? "error" : ""}
        />
        <textarea
          placeholder={t("introduction")}
          draggable="false"
          name="Message"
          id="message"
          value={message}
          onChange={(e) => handleChange("message", e.target.value)}
          disabled={isLoading}
          className={error === "message" ? "error" : ""}
        />
        <CustomButton
          text={isLoading ? "loading" : "send"}
          onClick={onClickHandler}
          disabled={isLoading}
        />
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

    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-align: left;
  }

  .error {
    border-bottom: 2px solid red;
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

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      justify-content: center;
    }

    button {
      margin-top: 10px;
      width: 252px;
      font-size: 28px;
    }
  }
`;
