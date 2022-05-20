import { Img } from "./style";

export default function Normal() {
  return (
    <Img src="data:image/png;base64,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" />
  );
}
