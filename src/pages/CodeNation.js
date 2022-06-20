import Calculator from "../cn-components/Calculator";
import Counter from "../cn-components/Counter";
import { Description, FlexBox, EachBox } from "../css/App.styled";

const CodeNation = () => {
  return (
    <div>
      <div>
        <Description>Code Nation ReactJS</Description>
        <FlexBox>
          <EachBox>
            <Counter />
          </EachBox>
          <EachBox>
            <Calculator />
          </EachBox>
        </FlexBox>
      </div>
    </div>
  );
};

export default CodeNation;
