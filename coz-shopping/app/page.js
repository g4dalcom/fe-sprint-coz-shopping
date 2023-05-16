"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProducts } from "./redux/product";
import styled from "styled-components";
import Modal from "./component/Modal";
import ProductList from "./component/ProductList";
import { bookmarkAction } from "./redux/bookmark";
import { notificationAction } from "./redux/notification";

export default function Home() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProducts());
    dispatch(bookmarkAction.getBookmarks());
  }, [dispatch]);

  console.log(
    "state = ",
    useSelector((state) => state)
  );
  const products = useSelector((state) => state.product.products);
  const allProducts = useSelector((state) => state.product.all);
  const bookmark = useSelector((state) => state.bookmark.bookmarks);
  const marked = allProducts.filter((e) => bookmark.includes(e.id));

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  {
    /* 상품 상태에 따른 북마크 알림 메시지 */
  }
  const getMessage = (e) => {
    let title = e.type === "Brand" ? e.brand_name : e.title;
    console.log("title = ", title);
    let message = "";

    if (marked.includes(e.id)) message = `북마크에서 ${title} 삭제!`;
    else message = `북마크에 ${title} 추가!`;

    return message;
  };

  {
    /* 북마킹 */
  }
  const productClickHandler = (e) => {
    dispatch(bookmarkAction.marked(e.id));
    dispatch(notificationAction.enque_notification(getMessage(e))),
      setTimeout(() => dispatch(notificationAction.deque_notification()), 3000);
  };

  return (
    <>
      <Modal
        openModal={openModal}
        openModalHandler={openModalHandler}
        product={product}
        productClickHandler={productClickHandler}
      />
      <MainContainer>
        <ListContainer>
          <ListTitle>상품 리스트</ListTitle>
          <ProductLists>
            <ProductList
              products={products}
              setProduct={setProduct}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </ProductLists>
        </ListContainer>
        <ListContainer>
          <ListTitle>북마크 리스트</ListTitle>
          <ProductLists>
            <ProductList
              products={marked.slice(0, 4)}
              setProduct={setProduct}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </ProductLists>
        </ListContainer>
      </MainContainer>
    </>
  );
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 70vw;
  height: 80vh;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* display: none; */
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: #217af4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 70vw;
  height: 50%;
  gap: 12px;
`;

export const ListTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  height: 10%;
`;

export const ProductLists = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 80%;
  gap: 24px;
  flex: none;
  flex-grow: 0;
`;

export const CozProduct = styled.div`
  width: 320px;
  height: 260px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  border-radius: 12px;
  position: relative;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  & > img:not(:first-child) {
    position: absolute;
    right: 15px;
    bottom: 70px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const CozTitle = styled.div`
  font-family: Dongle;
  font-size: 25px;
  font-weight: 800;
  line-height: 30px;
`;

export const CozDiscount = styled.div`
  color: #452cdd;
  font-family: Dongle;
  font-size: 23px;
  font-weight: 600;
  position: absolute;
  right: 0;
  bottom: 30px;
  line-height: 15px;
`;

export const CozPrice = styled.div`
  font-family: Dongle;
  font-size: 20px;
  font-weight: 550;
  position: absolute;
  right: 0;
  bottom: 7px;
`;

export const CozFollower = styled.div`
  font-family: Dongle;
  position: absolute;
  right: 0;
  bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 15px;
`;

export const Follower = styled.div`
  font-family: Dongle;
  font-size: 20px;
  font-weight: 550;
  position: absolute;
  right: 0;
  bottom: 7px;
`;

export const CozSubTitle = styled.div`
  font-family: Dongle;
  font-size: 18px;
  font-weight: 500;
  line-height: 10px;
`;
