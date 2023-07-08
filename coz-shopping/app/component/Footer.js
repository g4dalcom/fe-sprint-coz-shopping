"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <strong>INFORMATION</strong>
        <Link href="github.com/g4dalcom">Github : github.com/g4dalcom</Link>
        <Link href="g4daclom.tistory.com">Blog : g4daclom.tistory.com</Link>
      </FooterContent>
      <strong style={{ fontSize: "14px" }}>
        &copy;Devcat. ALL RIGHTS RESERVED.
      </strong>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 13vh;
  background-color: #f5f5f5;
  position: absolute;
  bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
