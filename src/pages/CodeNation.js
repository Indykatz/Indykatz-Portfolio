import Counter from "../components/Counter";
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
            <Counter />
          </EachBox>
        </FlexBox>
      </div>
    </div>
  );
};

export default CodeNation;
