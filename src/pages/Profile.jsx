import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Profile() {
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const handleLogout = () => {
        setToken(null);
        navigate("/login");
    };

    return (
        <Container>
            <h1 className="my-3">Profile</h1>
            <p>This is your profile page.</p>
        <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </Container>
    );
}