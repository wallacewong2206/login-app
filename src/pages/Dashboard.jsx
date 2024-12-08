import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const handleLogout = () => {
        setToken(null);
        navigate("/login");
    };

    return (
        <Container>
            <h1 className="my-3">Dashboard</h1>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sigma School Analytics</Card.Title>
                            <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button variant="danger" style={{ marginTop: 5 }} onClick={handleLogout}>Logout</Button>
        </Container>
    );
}