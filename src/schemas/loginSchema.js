const loginSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email", minLength: 5 },
    password: { type: "string", minLength: 6 },
  },
  required: ["email", "password"],
};

export default loginSchema;
