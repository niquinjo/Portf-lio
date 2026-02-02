import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  githubApiUrl?: string;
};

export function ProjectCard({
  title,
  description,
  websiteUrl,
  githubUrl,
  githubApiUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-slate-800 border border-white/10 text-white mb-5">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-white/80 leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-3">
        {websiteUrl && (
          <Button asChild size="sm">
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              Website <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}

        {githubUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={githubUrl} target="_blank" className="text-black cursor-pointer" rel="noreferrer">
              GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}

        {githubApiUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={githubApiUrl} target="_blank" className="text-black cursor-pointer" rel="noreferrer">
              GitHub API <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
