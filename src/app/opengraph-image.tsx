import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a0a0a",
                    color: "#fafafa",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        fontSize: 52,
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.2,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {siteConfig.hero.headlinePrefix}
                    <span style={{ color: "#5c5ee8" }}>
                        {siteConfig.hero.headlineHighlight}
                    </span>
                    {siteConfig.hero.headlineSuffix}
                </div>
            </div>
        ),
        { ...size }
    );
}