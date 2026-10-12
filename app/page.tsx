import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./themetoggle";

export default function Home() {
  return (

    <div className="min-h-screen text-black bg-white dark:text-white dark:bg-black 
    flex items-center justify-center transition-all duration-300 ">
      <div className="max-w-3xl text-center space-y-10">
        <h1 className="text-6xl font-semibold" >Next js Dark mode and light mode using shad cn </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum commodi quam natus
          repellendus, esse illorem accusamus perspiciatis at dolore, nam repellat
          ex placeat odit reprehenderit ipsum aliquid? Obcaecati.</p>
        <div className="space-x-2">
          <Button>Button 1 </Button>
          <Button variant="secondary">Button 2 </Button>
        </div>
        <ThemeToggle />
      </div>
    </div>

  );
}
