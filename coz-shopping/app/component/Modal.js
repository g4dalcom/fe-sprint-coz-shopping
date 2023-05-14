import styled from "styled-components";

export default function Modal({ openModal, openModalHandler, product }) {
  return (
    <>
      {openModal && (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalContainer>
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
            <ModalBookmark>🤍</ModalBookmark>
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
  /* border-radius: 10px; */
  z-index: 1;
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

const ModalBookmark = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
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
