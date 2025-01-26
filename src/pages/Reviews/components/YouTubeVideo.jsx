import { useState } from "react";
import {PlayIcon} from "assets/icons/PlayIcon.jsx";

export const YouTubeVideo = ({ videoId }) => {
    const [showVideo, setShowVideo] = useState(false);

    const getVideoId = (url) => {
        try {
            const parsedUrl = new URL(url);
            const videoIdFromParam = parsedUrl.searchParams.get("v");
            if (videoIdFromParam) return videoIdFromParam;
            return parsedUrl.pathname.split("/").pop();
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                cursor: "pointer",
            }}
            onClick={() => setShowVideo(true)}
        >
            {showVideo ? (
                <iframe
                    src={`https://www.youtube.com/embed/${getVideoId(videoId)}?autoplay=1`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            ) : (
                <img
                    src={`https://img.youtube.com/vi/${getVideoId(videoId)}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            )}

            {!showVideo && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",

                    }}
                >
                   <PlayIcon/>
                </div>
            )}
        </div>
    );
};
