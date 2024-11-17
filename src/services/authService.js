export const loginUser = async (credentials) => {
    // Mock API call for login
    if (
        credentials.email === "test@example.com" &&
        credentials.password === "password123"
    ) {
        return {
            success: true,
            token: "mockToken123",
            user: { name: "Test User", email: "test@example.com" },
        };
    } else {
        throw new Error("Invalid email or password");
    }
};

export const registerUser = async (userData) => {
    // Mock API call for registration
    if (userData.email === "test@example.com") {
        throw new Error("User already exists");
    } else {
        return {
            success: true,
            user: { name: userData.name, email: userData.email },
        };
    }
};
