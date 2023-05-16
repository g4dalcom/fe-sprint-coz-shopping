import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export default function Toast() {
  const messages = useSelector((state) => state.notification.notification);

  return (
    <>
      <NotificationContainer>
        {messages.map((msg) => (
          <Notification key={Math.random()}>{msg}</Notification>
        ))}
      </NotificationContainer>
    </>
  );
}

const NotificationContainer = styled.div`
  font-size: 1rem;
  position: fixed;
  z-index: 100;
  bottom: 80px;
  right: 12px;
`;

const toasting = keyframes`
      from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Notification = styled.div`
  transition: transform 0.6s ease-in-out;
  animation: ${toasting} 0.6s;
  background: #452cdd;
  transition: 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  color: #000;
  opacity: 0.9;
  font-weight: 600;

  height: 50px;
  width: 360px;
  color: #fff;
  padding: 15px;
  margin: 10px;
`;
