import { OrderBoard } from "../OrderBoard/index";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <OrderBoard/>
            <OrderBoard/>
            <OrderBoard/>
        </Container>
    )
}