
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-main p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-kube-500 mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">
          Oops! This flag can't be captured because the page doesn't exist.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <Home size={16} className="mr-2" />
            Return to Base
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
