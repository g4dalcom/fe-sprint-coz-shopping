"use client";

import styled from "styled-components";
import * as S from "@/app/page";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/redux/product";
import ProductList from "@/app/component/ProductList";
import Modal from "@/app/component/Modal";
import Filtering from "@/app/component/Filtering";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [filterValue, setFileterValue] = useState(""); // 필터링 조건("" = All, 나머지는 type name)
  const [openModal, setOpenModal] = useState(false); // 모달창 상태
  const [product, setProduct] = useState({}); // 선택된 상품(선택시 모달창으로 띄우기 위함)

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  {
    /* input type radio의 value값으로 필터링 조건 얻어오기
      value = type */
  }
  const filterValueHandler = (e) => {
    setFileterValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  {
    /* 필터링 조건에 해당하는 상품만 불러오기 */
  }
  const products = useSelector((state) => state.product.products).filter((e) =>
    filterValue === "" ? e : e.type === filterValue
  );

  return (
    <>
      <Modal
        openModal={openModal}
        openModalHandler={openModalHandler}
        product={product}
      />
      <S.MainContainer>
        <Filtering filterValueHandler={filterValueHandler} />

        {/* 상품 리스트 */}
        <ProductContainer>
          <OVProductList>
            <ProductList
              products={products}
              setProduct={setProduct}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </OVProductList>
        </ProductContainer>
      </S.MainContainer>
    </>
  );
}

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export const OVProductList = styled(S.ProductLists)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;
