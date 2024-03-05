import { Container } from "react-bootstrap";
import { Jumbotron } from "@/components/Jumbotron";
import { TrafficLight } from "@/components/TrafficLight";

export default function Home() {
  return (
    <Container>
      <Jumbotron />
      <TrafficLight/>
    

    </Container>
  );
}
