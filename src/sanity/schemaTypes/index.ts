import { type SchemaTypeDefinition } from "sanity";
import { projectSchemaType } from "./projectSchemaType";
import { technologySchemaType } from "./technologySchemaType";
import { quoteSchemaType } from "./quoteSchemaType";
import { bookSchemaType } from "./bookSchemaType";
import { inspirationSchemaType } from "./InspirationSchemaType";
import { skillSchemaType } from "./skillSchemaType";
import { experienceSchemaType } from "./experienceSchemaType";
import { educationSchemaType } from "./educationSchemaType";
import { extracurricularSchemaType } from "./extracurricularSchemaType";
import { philosophySchemaType } from "./philosophySchemaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchemaType,
    technologySchemaType,

    // About
    skillSchemaType,
    experienceSchemaType,
    educationSchemaType,
    extracurricularSchemaType,

    // Values
    philosophySchemaType,
    inspirationSchemaType,
    quoteSchemaType,
    bookSchemaType,
  ],
};
