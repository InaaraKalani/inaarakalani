"use client";

import { useState } from "react";
import ProjectsFilterSection from "./ProjectsFilterSection";
import ProjectsGridSection from "./ProjectsGridSection";
import {
  ProjectCategory,
  projects,
  ProjectStatus,
  ProjectType,
} from "@/data/projects.data";

export default function ProjectsFilterGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | ""
  >("");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "">("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchByTechnologies = (project: ProjectType) => {
    return project.technologies.some((technology) =>
      technology.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const searchByHighlights = (project: ProjectType) => {
    return project.highlights.some((highlight) =>
      highlight.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredProjects = projects.filter((project) => {
    return (
      // Search by title, description, technologies, highlights
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by title
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by description
        searchByTechnologies(project) || // Search by technologies
        searchByHighlights(project)) && // Search by highlights
      // Filter by category
      (selectedCategory === "" || project.category === selectedCategory) &&
      // Filter by status
      (selectedStatus === "" || project.status === selectedStatus) &&
      // Filter by featured
      (!showFeaturedOnly || project.featured)
    );
  });

  return (
    <>
      <ProjectsFilterSection
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        showFeaturedOnly={showFeaturedOnly}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        setSelectedStatus={setSelectedStatus}
        setShowFeaturedOnly={setShowFeaturedOnly}
      />
      <ProjectsGridSection
        projects={filteredProjects}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        setSelectedStatus={setSelectedStatus}
        setShowFeaturedOnly={setShowFeaturedOnly}
      />
    </>
  );
}
