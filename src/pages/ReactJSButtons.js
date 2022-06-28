import Counter from "../components/Counter";
import Button from "../components/Button";
import Input from "../components/Input";
import ButtonInput from "../components/ButtonInput";

import { Description, FlexBox, EachBox } from "../css/App.styled";

const ReactJSButtons = () => {
  return (
    <div>
      <div>
        <Description>ReactJS Buttons</Description>
        <FlexBox>
          <EachBox>
            <Counter />
          </EachBox>
          <EachBox>
            <Button />
          </EachBox>
          <EachBox>
            <Input />
          </EachBox>
          <EachBox>
            <ButtonInput />
          </EachBox>
        </FlexBox>
      </div>
    </div>
  );
};

export default ReactJSButtons;
