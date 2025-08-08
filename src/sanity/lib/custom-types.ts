import { ProjectsQueryResult } from "./types";

export type ProjectType = ProjectsQueryResult[0];
export type ProjectCategory = ProjectType["category"];
export type ProjectStatus = ProjectType["status"];
