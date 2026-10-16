import { cn } from "@/lib/utils";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-state-page" role="alert">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              className="text-destructive mb-6 flex-shrink-0"
            />

            <p className="eyebrow">
              <AlertTriangle size={14} /> 500 / INTERFACE RECOVERABLE
            </p>
            <h1>
              Algo saiu
              <br />
              <span>do eixo.</span>
            </h1>
            <p className="error-state-copy">
              A interface encontrou um erro inesperado. Você pode recarregar a
              página ou retornar para a home.
            </p>

            <div className="p-4 w-full rounded bg-muted overflow-auto mb-6">
              <pre className="error-state-details">
                {import.meta.env.DEV
                  ? this.state.error?.stack
                  : "Detalhes técnicos ocultos em produção."}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={cn("button button--primary")}
            >
              <RotateCcw size={16} />
              <RotateCcw size={16} /> Recarregar página
            </button>
            <a className="text-link" href="/">
              <Home size={16} /> Voltar para home
            </a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
