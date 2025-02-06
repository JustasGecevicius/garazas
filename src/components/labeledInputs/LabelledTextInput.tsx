import { LabelledInputWrapper } from "../Inputs/LabelledInput";
import { TextInput } from "../Inputs/TextInput";

type Props = {
  name: string;
  dataRef: React.MutableRefObject<{ [key: string]: any }>;
  value: string;
}

export function LabelledTextInput(props: Props) {
  const { name, dataRef, value } = props;

  return <LabelledInputWrapper title={name}>
    <TextInput name={name} dataRef={dataRef} value={value} />
  </LabelledInputWrapper>
}