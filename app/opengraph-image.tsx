import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content/siteConfig";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated social card. The original tags pointed at /img/preview.png, which does
 * not exist on the server — every share rendered without an image.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d28 50%, #131340 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 18,
              height: 64,
              borderRadius: 9,
              background: "linear-gradient(180deg, #9b59b6, #002fa7)",
            }}
          />
          <span>
            Ne<span style={{ color: "#a78bfa" }}>Ko-SysDev</span>
          </span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Capstone System Developers in the Philippines
        </div>

        <div style={{ marginTop: 28, fontSize: 32, color: "#9ca3af" }}>
          Web, mobile & desktop systems · Santo Niño, Cagayan
        </div>

        <div style={{ marginTop: 48, display: "flex", gap: 24, fontSize: 26 }}>
          {["PHP & Laravel", "Android & Flutter", "MySQL", "REST APIs"].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  padding: "12px 24px",
                  borderRadius: 999,
                  border: "2px solid rgba(155,89,182,0.5)",
                  color: "#c4b5fd",
                }}
              >
                {chip}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
