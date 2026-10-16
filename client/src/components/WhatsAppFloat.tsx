import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float whatsapp-float--motion"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Salas Tech pelo WhatsApp"
      aria-describedby="whatsapp-tooltip"
      onClick={() =>
        trackEvent("whatsapp_clicked", { source: "floating_button" })
      }
    >
      <svg
        className="whatsapp-float__icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16 3.2A12.8 12.8 0 0 0 5 22.5L3.5 28.6l6.3-1.5A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.7.9.9-3.6-.3-.4A10.5 10.5 0 1 1 16 26.4Zm5.8-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
      </svg>
      <span
        id="whatsapp-tooltip"
        className="whatsapp-float__tooltip"
        role="tooltip"
      >
        Falar sobre um projeto
      </span>
    </a>
  );
}
