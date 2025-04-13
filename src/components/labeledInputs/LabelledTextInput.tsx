import { LabelledInputWrapper } from "../Inputs/LabelledInput";
import { TextInput, TextInputPropsType } from "../Inputs/TextInput";

type LabelledInputWrapperPropsType = {} & TextInputPropsType;

export function LabelledTextInput(props: LabelledInputWrapperPropsType) {
  const { name } = props;

  return (
    <LabelledInputWrapper title={name}>
      <TextInput {...props} />
    </LabelledInputWrapper>
  );
}
