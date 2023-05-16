"use client";

import { useSelector } from "react-redux";
import Filtering from "../component/Filtering";
import * as S from "@/app/page";
import * as P from "../products/list/page";
import { useState } from "react";
import ProductList from "../component/ProductList";
import Modal from "@/app/component/Modal";

export default function Bookmark() {
  const [filterValue, setFileterValue] = useState(""); // 필터링 조건("" = All, 나머지는 type name)
  const [openModal, setOpenModal] = useState(false); // 모달창 상태
  const [product, setProduct] = useState({}); // 선택된 상품(선택시 모달창으로 띄우기 위함)

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  {
    /* 필터링 조건 저장(All(=""), Product, Category, Exhibition, Brand 중 선택된 것) */
  }
  const filterValueHandler = (e) => {
    setFileterValue(e.target.value);
  };

  {
    /* @marked 북마크된 상품의 id 목록
      @products 모든 상품 중 북마크 목록에 있는 id와 일치한 상품이면서 filterValue(필터링 조건)와 일치하는 상품
  */
  }
  const marked = useSelector((state) => state.bookmark.bookmarks);
  const products = useSelector((state) => state.product.all)
    .filter((e) => marked.includes(e.id))
    .filter((e) => (filterValue === "" ? e : e.type === filterValue));

  console.log("page products = ", products);

  return (
    <>
      <Modal
        openModal={openModal}
        openModalHandler={openModalHandler}
        product={product}
      />
      <S.MainContainer>
        <Filtering
          filterValueHandler={filterValueHandler}
          filterValue={filterValue}
        />
        <P.ProductContainer>
          <P.OVProductList>
            <ProductList
              products={products}
              setProduct={setProduct}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </P.OVProductList>
        </P.ProductContainer>
      </S.MainContainer>
    </>
  );
}
