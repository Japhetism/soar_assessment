import { z } from "zod";

export const profileSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .refine(val => val.trim() !== "", { message: "Name is required" }),
  username: z
    .string({ required_error: "Username is required" })
    .refine(val => val.trim() !== "", { message: "Username is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .refine(val => val.trim() !== "", { message: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .refine(val => val.trim() !== "", { message: "Password is required" }),
  dateOfBirth: z
    .string({ required_error: "Date of birth is required" })
    .refine(val => val.trim() !== "", { message: "Date of birth is required" }),
  presentAddress: z
    .string({ required_error: "Present address is required" })
    .refine(val => val.trim() !== "", { message: "Present address is required" }),
  permanentAddress: z
    .string({ required_error: "Permanent address is required" })
    .refine(val => val.trim() !== "", { message: "Permanent address is required" }),
  city: z
    .string({ required_error: "City is required" })
    .refine(val => val.trim() !== "", { message: "City is required" }),
  postalCode: z
    .string({ required_error: "Postal code is required" })
    .refine(val => val.trim() !== "", { message: "Postal code is required" }),
  country: z
    .string({ required_error: "Country is required" })
    .refine(val => val.trim() !== "", { message: "Country is required" }),
});
