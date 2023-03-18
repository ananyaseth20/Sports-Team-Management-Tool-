import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";

import UserContext, { UserContextType } from "../context/UserContext";

const Container = styled("div")({
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

const LoginPage = () => {
    const { authLogin } = useContext(UserContext) as UserContextType;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userID = data.get("user");
        authLogin(userID);
    };

    return (
        <div>
            <Container>
                <Typography sx={{ mb: 1 }} variant="h3">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField required id="user" label="User" name="user" />
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1 }}
                        >
                            Login
                        </Button>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default LoginPage;