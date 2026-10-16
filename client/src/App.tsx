import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollEffects from "@/components/ScrollEffects";
import SmoothScroll from "@/components/SmoothScroll";

const Home = lazy(() => import("./pages/Home"));
const Company = lazy(() => import("@/pages/Company"));
const EnglishHome = lazy(() => import("@/pages/EnglishHome"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Resume = lazy(() => import("@/pages/Resume"));
const EnglishResume = lazy(() => import("@/pages/EnglishResume"));
const DigitalCard = lazy(() => import("@/pages/DigitalCard"));
const ArticleDetail = lazy(() => import("@/pages/ArticleDetail"));
const NotesArchive = lazy(() => import("@/pages/NotesArchive"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Maintenance = lazy(() => import("@/pages/Maintenance"));
const Process = lazy(() => import("@/pages/Process"));
const QuotePage = lazy(() => import("@/pages/QuotePage"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const BrandAssets = lazy(() => import("@/pages/BrandAssets"));

function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="status-dot" /> carregando rota<span>.</span>
    </div>
  );
}

function Router() {
  return (
    <Switch>
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
