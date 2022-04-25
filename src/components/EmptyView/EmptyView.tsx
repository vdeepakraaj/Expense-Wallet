import { GrTableAdd } from "react-icons/gr";
import { Container, Title } from "./EmptyView.styles";
import { FontSizes } from "../../styles/FontSizes";

type Props = {
  message: string;
};

export default function EmptyView(props: Props) {
  const { message } = props;

  return (
    <Container data-testid="no-event-msg-container">
      <GrTableAdd size={FontSizes.size3} />
      <Title>{message}</Title>
    </Container>
  );
}
