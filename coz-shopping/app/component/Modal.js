import styled from "styled-components";
import Image from "next/image";
import vector from "../../public/vector.svg";
import bookmarkOff from "../../public/bookmark-off.svg";

export default function Modal({ openModal, openModalHandler, product }) {
  return (
    <>
      {/* 상품 클릭해서 띄운 모달창 */}
      {openModal && (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalContainer>
            {/* X(닫기) 버튼 */}
            <Image
              onClick={openModalHandler}
              src={vector}
              width={24}
              height={24}
              alt="close button"
            />

            {/* 상품 이미지 */}
            <ModalView>
              <ModalImage
                src={
                  product.type === "Brand"
                    ? product.brand_image_url
                    : product.image_url
                }
                alt="product image"
              />
            </ModalView>

            {/* 북마크 버튼 및 상품명 */}
            <Image
              src={bookmarkOff}
              width={24}
              height={24}
              alt="bookmark button"
              onClick={(e) => {
                e.stopPropagation(), console.log("clicked!!");
              }}
            />
            <ModalTitle>
              {product.type === "Brand" ? product.brand_name : product.title}
            </ModalTitle>
          </ModalContainer>
        </ModalBackdrop>
      )}
    </>
  );
}

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 750px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > img:not(:first-child) {
    z-index: 10;
    position: absolute;
    bottom: 15px;
    left: 20px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  & > img:first-child {
    z-index: 10;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ModalView = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  box-shadow: 5px 9px 25px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
  z-index: 5;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const ModalTitle = styled.div`
  color: white;
  font-family: Dongle;
  font-weight: 600;
  font-size: 30px;
  z-index: 10;
  position: absolute;
  bottom: 5px;
  left: 55px;
`;
