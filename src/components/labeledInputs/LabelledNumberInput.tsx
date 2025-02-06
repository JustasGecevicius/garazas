import { LabelledInputWrapper } from "../Inputs/LabelledInput";
import { NumberInput } from "../Inputs/NumberInput";

type Props = {
  name: string;
  dataRef: React.MutableRefObject<{ [key: string]: any }>;
  value: string;
}

export function LabelledNumberInput(props: Props) {
  const { name, dataRef, value } = props;

  return <LabelledInputWrapper title={name}>
    <NumberInput name={name} dataRef={dataRef} value={value} />
  </LabelledInputWrapper>
}