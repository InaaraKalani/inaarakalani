import { type SchemaTypeDefinition } from "sanity";
import { projectSchemaType } from "./projectSchemaType";
import { technologySchemaType } from "./technologySchemaType";
import { quoteSchemaType } from "./quoteSchemaType";
import { bookSchemaType } from "./bookSchemaType";
import { inspirationSchemaType } from "./InspirationSchemaType";
import { skillSchemaType } from "./skillSchemaType";
import { experienceSchemaType } from "./experienceSchemaType";
import { educationSchemaType } from "./educationSchemaType";
import { extracurricularsSchemaType } from "./extracurricularsSchemaType";
import { philosophySchemaType } from "./philosophySchemaType";
import { achievementsSchemaType } from "./achievementsSchemaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Landing
    achievementsSchemaType,

    // About
    skillSchemaType,
    experienceSchemaType,
    educationSchemaType,
    extracurricularsSchemaType,

    // Projects
    projectSchemaType,
    technologySchemaType,

    // Values
    philosophySchemaType,
    inspirationSchemaType,
    quoteSchemaType,
    bookSchemaType,
  ],
};
