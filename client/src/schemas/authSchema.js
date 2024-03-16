import { z } from "zod";

export const loginSchema = z.object({
    email: z.string()
        .email({ message: "Invalid email address" })
        .min(6, { message: "Email must be at least 6 characters long" })
        .max(255, { message: "Email must not exceed 255 characters" })
        .refine((value) => value.trim() === value, {
            message: "Email must not contain leading or trailing spaces",
        }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(50, { message: "Password must not exceed 50 characters" })
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            {
                message:
                    "Password must contain minimum eight characters, at least one letter and one number",
            }
        ),
});

export const signupSchema = z.object({
    fullName: z
        .string()
        .min(4, { message: "Enter a valid name" })
        .max(100, { message: "Name is too long" }),
    email: z.string()
        .email({ message: "Invalid email address" })
        .min(6, { message: "Email must be at least 6 characters long" })
        .max(255, { message: "Email must not exceed 255 characters" })
        .refine((value) => value.trim() === value, {
            message: "Email must not contain leading or trailing spaces",
        }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(50, { message: "Password must not exceed 50 characters" })
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            {
                message:
                    "Password must contain minimum eight characters, at least one letter and one number",
            }
        ),
    confirmPassword: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(50, { message: "Password must not exceed 50 characters" })
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            {
                message:
                    "Password must contain minimum eight characters, at least one letter and one number",
            }
        ),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
});
