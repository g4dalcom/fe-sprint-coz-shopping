"use client";

import { useDispatch, useSelector } from "react-redux";
import Filtering from "../component/Filtering";
import * as S from "@/app/page";
import * as P from "../products/list/page";
import { useState, useEffect } from "react";
import { bookmarkAction } from "../redux/bookmark";
import { getAllProducts } from "../redux/product";
import ProductList from "../component/ProductList";
import Modal from "@/app/component/Modal";

export default function Bookmark() {
  const [filterValue, setFileterValue] = useState(""); // 필터링 조건("" = All, 나머지는 type name)
  const [openModal, setOpenModal] = useState(false); // 모달창 상태
  const [product, setProduct] = useState({}); // 선택된 상품(선택시 모달창으로 띄우기 위함)

  const dispatch = useDispatch();

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    dispatch(bookmarkAction.getBookmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filterValueHandler = (e) => {
    setFileterValue(e.target.value);
  };

  const marked = useSelector((state) => state.bookmark.bookmarks);
  const products = useSelector((state) => state.product.products)
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
        <Filtering filterValueHandler={filterValueHandler} />
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
