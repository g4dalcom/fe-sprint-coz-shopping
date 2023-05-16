import Image from "next/image";
import * as S from "../page";
import bookmarkOff from "../../public/bookmark-off.svg";
import bookmarkOn from "../../public/bookmark-on.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkAction } from "../redux/bookmark";
import { notificationAction } from "../redux/notification";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function ProductList({
  products,
  setProduct,
  openModal,
  setOpenModal,
}) {
  const dispatch = useDispatch();
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

  {
    /* 북마크 목록 가져오기(해당 상품이 목록에 포함되어 있는지에 따라 on/off하기 위함, marked.includes(product.id)) */
  }
  const marked = useSelector((state) => state.bookmark.bookmarks);

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
              case "Category":
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="category image"
                      className="product_image"
                    />
                    <Image
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        productClickHandler(e);
                      }}
                    />
                    <S.CozTitle>#{e.title}</S.CozTitle>
                  </>
                );

              case "Brand":
                return (
                  <>
                    <Image
                      src={e.brand_image_url}
                      width={260}
                      height={200}
                      alt="brand image"
                      className="product_image"
                    />
                    <Image
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        productClickHandler(e);
                      }}
                    />
                    <S.CozTitle>{e.brand_name}</S.CozTitle>
                    <S.CozFollower>관심고객수</S.CozFollower>
                    <S.Follower>
                      {[e.follower]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </S.Follower>
                  </>
                );
              case "Product":
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="product image"
                      className="product_image"
                    />
                    <Image
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        productClickHandler(e);
                      }}
                    />
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
              case "Exhibition":
                return (
                  <>
                    <Image
                      src={e.image_url}
                      width={260}
                      height={200}
                      alt="exhibition image"
                      className="product_image"
                    />
                    <Image
                      src={marked.includes(e.id) ? bookmarkOn : bookmarkOff}
                      width={24}
                      height={24}
                      alt="bookmark button"
                      onClick={(event) => {
                        event.stopPropagation();
                        productClickHandler(e);
                      }}
                    />
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
