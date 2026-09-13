import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 25,
                    fontWeight: 800,
                    background: "#5c5ee8",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f8f8f8",
                    borderRadius: 6,
                }}
            >
                S
            </div>
        ),
        { ...size }
    );
}