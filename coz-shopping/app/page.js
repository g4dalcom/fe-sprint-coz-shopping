"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/product";
import styled from "styled-components";
import Modal from "./component/Modal";
import ProductList from "./component/ProductList";

export default function Home() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({});

  console.log("product = ", product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  console.log(products);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Modal
        openModal={openModal}
        openModalHandler={openModalHandler}
        product={product}
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
            {products.map((e) => (
              <CozProduct key={e.id}>{e.type}</CozProduct>
            ))}
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
  height: 70vh;
  margin-top: 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
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
