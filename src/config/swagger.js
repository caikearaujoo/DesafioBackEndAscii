import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Produtos - Ascii",
      version: "1.0.0",
      description: "API REST para gerenciamento de produtos, desafio da Ascii.",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./controllers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
