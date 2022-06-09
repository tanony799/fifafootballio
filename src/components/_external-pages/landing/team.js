import styled from "styled-components";
import I1 from "./../../../assets/team/group_585.png";
import I2 from "./../../../assets/team/group_588.png";
import I3 from "./../../../assets/team/group_591.png";
import I4 from "./../../../assets/team/group_594.png";
import I5 from "./../../../assets/team/group_597.png";
import I6 from "./../../../assets/team/group_600.png";
import I7 from "./../../../assets/team/group_603.png";
import I8 from "./../../../assets/team/group_606.png";
import I9 from "./../../../assets/team/group_609.png";
import I10 from "./../../../assets/team/group_624.png";
import I11 from "./../../../assets/team/group_625.png";
import I12 from "./../../../assets/team/group_637.png";

const Wrapper = styled.div``;

const WrapperItem = styled.div`
  width: 100%;
  height: 300px;
`;

const ResponsiveImg = styled.img`
  width: 238px;
  height: 238px;
  margin-left: auto;
  margin-right: auto;
`;

const Text1 = styled.div`
  font: normal normal bold 18px/20px Poppins;
  color: white;
  letter-spacing: 4px;
  line-height: 25px;
  white-space: nowrap;
  text-align: center;
`;

const Text2 = styled.div`
  font: normal normal normal 14px/50px Poppins;
  color: white;
  text-align: center;
  line-height: 17px;
  white-space: nowrap;
  text-align: center;
`;

const Team = () => {
  return (
    <Wrapper>
      <div className="container p-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I1} />
              <Text1>LEON</Text1>
              <Text2>OPERATIONAL LEAD</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I2} />
              <Text1>BRAM</Text1>
              <Text2>TECH LEAD</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I3} />
              <Text1>BRAM</Text1>
              <Text2>TECH LEAD</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I4} />
              <Text1>HUUB</Text1>
              <Text2>CONTENT MARKETEER</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I5} />
              <Text1>RENIET</Text1>
              <Text2>DESIGNER</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I6} />
              <Text1>THOMASFULL</Text1>
              <Text2>STACK DEVELOPER</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I7} />
              <Text1>JELLE</Text1>
              <Text2>GAME DEVELOPER</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I8} />
              <Text1>KASPARS</Text1>
              <Text2>FULL STACK DEVELOPER</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I9} />
              <Text1>DOMINIC</Text1>
              <Text2>FINANCIAL SUPPORT</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I10} />
              <Text1>KAREEM</Text1>
              <Text2>PARTNERSHIP LEAD</Text2>
            </WrapperItem>
          </div>
          <div className="col">
            <WrapperItem>
              <ResponsiveImg src={I11} />
              <Text1>KIMBERLEY</Text1>
              <Text2>GROWTH HACKER</Text2>
            </WrapperItem>
          </div>
          <div className="col ">
            <WrapperItem>
              <ResponsiveImg src={I12} />
              <Text1>LARS</Text1>
              <Text2>COMMUNITY SUPPORT</Text2>
            </WrapperItem>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export { Team };
