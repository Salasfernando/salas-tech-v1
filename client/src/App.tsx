import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollEffects from "@/components/ScrollEffects";
import SmoothScroll from "@/components/SmoothScroll";

import Home from "./pages/Home";
import Company from "@/pages/Company";
import EnglishHome from "@/pages/EnglishHome";
import ProjectDetail from "@/pages/ProjectDetail";
import ServiceDetail from "@/pages/ServiceDetail";
import Resume from "@/pages/Resume";
import EnglishResume from "@/pages/EnglishResume";
import DigitalCard from "@/pages/DigitalCard";
import ArticleDetail from "@/pages/ArticleDetail";
import NotesArchive from "@/pages/NotesArchive";
import NotFound from "@/pages/NotFound";
import Maintenance from "@/pages/Maintenance";
import Process from "@/pages/Process";
import QuotePage from "@/pages/QuotePage";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import BrandAssets from "@/pages/BrandAssets";

function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="status-dot" /> carregando rota<span>.</span>
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location]);

  return (
    <div key={location} className="route-transition-shell">
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route path="/empresa" component={Company} />
        <Route path="/en" component={EnglishHome} />
        <Route path="/servicos/:slug" component={ServiceDetail} />
        <Route path="/projetos/:slug" component={ProjectDetail} />
        <Route path="/curriculo" component={Resume} />
        <Route path="/en/curriculo" component={EnglishResume} />
        <Route path="/cartao" component={DigitalCard} />
        <Route path="/notas/:slug" component={ArticleDetail} />
        <Route path="/notas" component={NotesArchive} />
        <Route path="/manutencao" component={Maintenance} />
        <Route path="/processo" component={Process} />
        <Route path="/orcamento" component={QuotePage} />
        <Route path="/privacidade" component={Privacy} />
        <Route path="/termos-de-uso" component={Terms} />
        <Route path="/marca" component={BrandAssets} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<RouteLoading />}>
            <Router />
          </Suspense>
          <WhatsAppFloat />
          <ScrollEffects />
          <SmoothScroll />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
