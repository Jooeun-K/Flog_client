import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 100px;
`;

export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  margin-top: 20px;
  height: 1100px;


`;
export const PlanBox = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  // height 미정
  padding: 24px 20px;
  margin-right: 80px;
  width: calc(26000% / 1200);
  border: 1px solid #fff;
  width: 260px;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
export const Bar = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MoveBack = styled.div`
  font-size: 18px;
  color: #58bd97;
`;
export const BtnGroup = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`;
export const PlanBtnGroup = styled.div`
  display: flex;
  padding-top: 24px;

  flex-direction: column;
`;


export const DetailBox = styled.div``;
export const PlanWrapper = styled.div`
  margin-top: 14px;
  width: 100%;

`;

export const DayWrapper = styled.div`
  padding-top: 10px;
  position: relative;


`;

export const Day = styled.span`
   position: relative;
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
`
export const ToggleImg = styled.img`
   top: 18px;
    right: 135px;
    width: 16px;
    position: absolute;

    :hover {
      cursor: pointer;
    }
`

export const DayPlanWrapper = styled.div`
  margin-top: 22px;
`;

export const DayPlanDetail = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  margin-bottom: 12px;
  div {
    color: #818181;
    font-size: 12px;
  }
`;

export const DayPlanLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const moveBtn = styled.button`
  width: 100%;
  margin-bottom: 20px;
  background: #58bd97;
  border-radius: 40px;
  color: #fff;
  height: 40px;
  border: none;
  :hover {
    background: #a1dac5;
    border-color: #a1dac5;
  }
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 8px 0 24px;
  width: 100%;
  text-align: center;
  img {
    margin-bottom: 7px;
  }
`;
export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const Email = styled.div`
  margin-bottom: 13px;
  font-size: 12px;
  color: #7d7d7d;
`;

