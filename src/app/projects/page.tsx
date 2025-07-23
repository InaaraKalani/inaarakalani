"use client";

import ProjectsFilterSection from "@/components/projects-sections/ProjectsFilterSection";
import ProjectsGridSection from "@/components/projects-sections/ProjectsGridSection";
import ProjectsHeroSection from "@/components/projects-sections/ProjectsHeroSection";
import { ProjectCategory, projects, ProjectStatus } from "@/data/projects.data";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | ""
  >("");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "">("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || project.category === selectedCategory) &&
      (selectedStatus === "" || project.status === selectedStatus) &&
      (!showFeaturedOnly || project.featured)
    );
  });

  return (
    <main className="flex-1">
      <ProjectsHeroSection />
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
    </main>
  );
}
