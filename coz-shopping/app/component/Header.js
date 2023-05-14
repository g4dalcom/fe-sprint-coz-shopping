"use Client";

import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/logo.svg";
import burger from "../../public/burger.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const router = useRouter();
  const el = useRef();
  const [openModal, setOpenModal] = useState(false);

  {
    /* 드롭다운 메뉴 외부를 클릭하면 모달 닫기 */
  }
  useEffect(() => {
    const clickModalOutside = (e) => {
      if (!el?.current?.contains(e.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", clickModalOutside);

    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, []);

  {
    /* 메뉴 아이콘 클릭시 모달창 띄우기 */
  }
  const onClickHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <HeadContainer>
        {/* 로고 이미지 및 텍스트 */}
        <LogoContainer onClick={() => router.push("/")}>
          <Image src={logo} alt="logo" />
          <h1>COZ Shopping</h1>
        </LogoContainer>

        {/* 메뉴 아이콘(햄버거) 및 드롭다운 */}
        <NavContainer>
          <DropDownContainer>
            <Image onClick={onClickHandler} src={burger} alt="nav Button" />
            {openModal && (
              <DropDown id="dropdown" ref={el}>
                <List>
                  <div>OOO님, 안녕하세요!</div>
                </List>
                <List>
                  <Link onClick={() => setOpenModal(false)} href="/">
                    🎁상품리스트 페이지
                  </Link>
                </List>
                <List>
                  <Link onClick={() => setOpenModal(false)} href="/">
                    ⭐북마크 페이지
                  </Link>
                </List>
              </DropDown>
            )}
          </DropDownContainer>
        </NavContainer>
      </HeadContainer>
    </>
  );
}

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  position: sticky;
  margin: 20px auto;
  width: 70vw;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DropDown = styled.ul`
  width: 200px;
  border-radius: 12px;
  position: absolute;
  transform: translate(-40%, 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 9px 25px 0px rgb(0 0 0 / 12%);
  background-color: #fff;
`;

const List = styled.li`
  width: 100%;
  height: 30%;
  text-align: center;
  line-height: 45px;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  & div:hover {
    cursor: default;
  }
`;
