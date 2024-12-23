const registerSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
    email: { type: "string", format: "email", minLength: 5 },
    password: { type: "string", minLength: 6 },
    confirmPassword: { type: "string", minLength: 6 },
  },
  required: ["name", "email", "password", "confirmPassword"],
};

export default registerSchema;
