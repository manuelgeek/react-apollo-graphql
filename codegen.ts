import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  // documents: ["src/**/*.tsx"],
  //   documents: ["src/graphql/*.graphql"],
    ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/generated/graphql.ts": {
      //   preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        // ? NOTE: if you want to use react-query
        // "typescript-react-query",
      ],
      documents: ["src/graphql/*.graphql"],
    },
  },
}

export default config
