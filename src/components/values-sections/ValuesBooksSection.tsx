import { BookOpenText } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "../ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { StaggeredList } from "../ui/staggered-list";
import { BooksQueryResult } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

type props = {
  books: BooksQueryResult;
};

export default function ValuesBooksSection({ books }: props) {
  return (
    <section className="w-full py-12 md:py-24">
      <AnimatedSection className="container" animation="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter leading-normal sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Books That Shaped My Views
            </h2>
            <p className="text-muted-foreground text-lg">
              Stories and ideas that deepened my beliefs, challenged my
              thinking, and reminded me of the kind of world worth fighting for.
            </p>
          </div>

          <StaggeredList
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={150}
          >
            {books.map((book, index) => (
              <Card
                key={index}
                className="flex flex-col border-primary/10 hover:border-primary/20 transition-colors hover-lift h-full overflow-hidden group pt-0"
              >
                <div className="relative overflow-hidden">
                  {/* Blurred Background Image */}
                  <Image
                    src={urlFor(book.image!).url() || ""}
                    width="500"
                    height="300"
                    alt={book.title!}
                    className="absolute inset-0 -z-10 blur-sm aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />

                  {/* Book Image */}
                  <Image
                    src={urlFor(book.image!).url() || ""}
                    width="500"
                    height="300"
                    alt={book.title!}
                    className="aspect-video w-full object-contain transition-transform group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="flex-1 pt">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 hover-rotate shrink-0">
                      <BookOpenText className="h-5 w-5 text-accent group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">
                        by {book.author}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="-mt-3">
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-medium text-accent">
                      Genre: {book.genre}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </AnimatedSection>
    </section>
  );
}
