import bankJatimImage from "@/assets/bank-jatim.jpg";

const projects = [{
  title: "Bank Jatim",
  category: "Buku II",
  year: "2026",
  description: "Implementasi FDS meningkatkan resiliensi system core banking terhadap ancaman fraud",
  image: bankJatimImage
}];
export const Projects = () => {
  return <section id="projects" className="section-padding border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-label mb-4 text-primary font-sans font-medium text-xl text-right">Projects</h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => <div key={index} className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="image-hover order-2 lg:order-1">
                <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-display-md font-sans">{project.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                
                <p className="text-body text-muted-foreground">
                  {project.description}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium link-underline group-hover:text-accent transition-colors">
                  View Case Study
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};