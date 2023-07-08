import Image from "next/image";
import * as S from "../page";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { BRAND, CATEGORY, EXHIBITION, PRODUCT } from "../shared/Enum";
import BookmarkBtn from "./BookmarkBtn";

export default function ProductList({
  products,
  setProduct,
  openModal,
  setOpenModal,
}) {
  const [dataLength, setDataLength] = useState(4); // 무한 스크롤시 가져올 데이터의 길이
  const [observe, setObserve] = useState(false); // 무한 스크롤을 위한 감시 대상이 감지되었는지 여부

  console.log("상품 목록 = ", products.slice(0, dataLength));

  {
    /* 무한 스크롤 기능 */
  }
  useEffect(() => {
    setDataLength(dataLength + 8);
    setObserve(false);
  }, [observe]);

  const setObservationTarget = useIntersectionObserver(() => {
    setObserve(true);
    console.log("감지됨");
  });

  return (
    <>
      {products.slice(0, dataLength).map((e) => (
        <S.CozProduct
          key={e.id}
          onClick={() => {
            setProduct(e);
            setOpenModal(!openModal);
          }}
        >
          {(() => {
            switch (e.type) {
              case CATEGORY:
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="category image"
                      className="product_image"
                    />
                    <BookmarkBtn product={e} />
                    <S.CozTitle>#{e.title}</S.CozTitle>
                  </>
                );

              case BRAND:
                return (
                  <>
                    <Image
                      src={e.brand_image_url}
                      width={260}
                      height={200}
                      alt="brand image"
                      className="product_image"
                    />
                    <BookmarkBtn product={e} />
                    <S.CozTitle>{e.brand_name}</S.CozTitle>
                    <S.CozFollower>관심고객수</S.CozFollower>
                    <S.Follower>
                      {[e.follower]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </S.Follower>
                  </>
                );
              case PRODUCT:
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="product image"
                      className="product_image"
                    />
                    <BookmarkBtn product={e} />
                    <S.CozTitle>{e.title}</S.CozTitle>
                    <S.CozDiscount>{e.discountPercentage}%</S.CozDiscount>
                    <S.CozPrice>
                      {[e.price]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </S.CozPrice>
                  </>
                );
              case EXHIBITION:
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="exhibition image"
                      className="product_image"
                    />
                    <BookmarkBtn product={e} />
                    <S.CozTitle>{e.title}</S.CozTitle>
                    <S.CozSubTitle>{e.sub_title}</S.CozSubTitle>
                  </>
                );
            }
          })()}
        </S.CozProduct>
      ))}
      <div ref={setObservationTarget} style={{ paddingTop: "10px" }} />
    </>
  );
}
