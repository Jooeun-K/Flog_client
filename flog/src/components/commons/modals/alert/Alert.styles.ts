import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(44, 49, 49, 0.7);
  z-index: 900;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 20px;
  width: 480px;
  height: 300px;
  padding: 44px;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 23px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Contents = styled.div`
  color: #626262;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  word-break: keep-all;
`;

export const ButtonWrap = styled.div`
  margin-top: 10px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  height: 52px;
  width: 142px;
  border-radius: 100px;
  padding: 16px, 40px, 16px, 40px;

  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  background-color: #58bd97;
`;
