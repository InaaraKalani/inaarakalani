import { type SchemaTypeDefinition } from "sanity";
import { projectSchemaType } from "./projectSchemaType";
import { technologySchemaType } from "./technologySchemaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchemaType, technologySchemaType],
};
