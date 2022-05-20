import { Img } from "./style";

export default function Insect() {
  return (
    <Img src="data:image/png;base64,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" />
  );
}
