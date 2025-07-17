import { Search, Star } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  projectCategories,
  ProjectCategory,
  ProjectStatus,
  projectStatuses,
} from "@/data/projects.data";
import { cn } from "@/lib/utils";

type ProjectFilterSectionProps = {
  selectedCategory: ProjectCategory | "";
  selectedStatus: ProjectStatus | "";
  showFeaturedOnly: boolean;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: ProjectCategory | "") => void;
  setSelectedStatus: (value: ProjectStatus | "") => void;
  setShowFeaturedOnly: (value: boolean) => void;
};

export default function ProjectsFilterSection({
  selectedCategory,
  selectedStatus,
  showFeaturedOnly,
  searchTerm,
  setSearchTerm,
  setSelectedCategory,
  setSelectedStatus,
  setShowFeaturedOnly,
}: ProjectFilterSectionProps) {
  return (
    <section className="w-full py-8 bg-muted/30">
      <div className="container">
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => {
                  return (
                    <Button
                      key={category.value}
                      variant={
                        selectedCategory === category.value
                          ? "default"
                          : "ghost"
                      }
                      size="sm"
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category.value
                            ? ""
                            : category.value || ""
                        )
                      }
                      className={cn(
                        selectedCategory === category.value && "hover-scale"
                      )}
                    >
                      <category.icon className="size-4" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap gap-2">
                {projectStatuses.map((status) => (
                  <Button
                    key={status.value}
                    variant={
                      selectedStatus === status.value ? "default" : "ghost"
                    }
                    size="sm"
                    onClick={() =>
                      setSelectedStatus(
                        selectedStatus === status.value
                          ? ""
                          : status.value || ""
                      )
                    }
                    className={cn(
                      selectedStatus === status.value && "hover-scale"
                    )}
                  >
                    <status.icon className="size-4" />
                    {status.name}
                  </Button>
                ))}
              </div>

              {/* Featured Toggle */}
              <Button
                variant={showFeaturedOnly ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={cn(showFeaturedOnly && "hover-scale")}
              >
                <Star className="size-4" />
                Featured Only
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
