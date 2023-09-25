import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const BtnContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 44px;
  }
`;

const Btn = styled.button`
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.copied ? "var(--white-color)" : "var(--white-color)"};
  background-color: ${(props) =>
    props.copied ? "var(--green-color)" : "var(--purple-color)"};
  border: none;
  border-radius: 50px;
  margin-top: 44px;
  min-width: 267px;
  padding: 14px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const EmailText = styled.span`
  margin-left: 10px;
`;

export default function Buttons() {
  const [copied, setCopied] = useState(false);
  const email = "mma.murilo@gmail.com";

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <BtnContainer>
      <Btn onClick={handleEmailCopy} copied={copied}>
        {copied ? "E-mail Copiado!" : <MdOutlineEmail />}
        <EmailText>{copied ? "" : email}</EmailText>
      </Btn>
    </BtnContainer>
  );
}
