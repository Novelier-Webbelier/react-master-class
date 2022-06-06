import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "red"}>{text}</Container>
}

export default Circle;
