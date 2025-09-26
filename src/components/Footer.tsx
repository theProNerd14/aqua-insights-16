import blueInsightsLogo from "@/assets/blue-insights-logo.png";
export const Footer = () => {
  return <footer className="bg-card border-t border-border/50">
      <div className="container px-6 py-12 mx-[225px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="px-[45px]">
            <div className="flex items-center space-x-2 mb-4">
              <img src={blueInsightsLogo} alt="Blue-Insights" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold">Blue-Insights</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-driven unified data platform for ocean conservation and research.
            </p>
          </div>

          

          <div className="px-[75px]">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground py-px">
              
              <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="px-0">
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              
              
              
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center mx-[360px]">© 2025 Blue-Insights
Made with ❤️ in Pune, MH, India</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
};