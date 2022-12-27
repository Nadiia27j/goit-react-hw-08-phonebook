import { Link } from "react-router-dom";
import { useAuth } from "hooks";
import { Box } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box>
            <Link to='/'>Home</Link>
            {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
        </Box>
    );
};