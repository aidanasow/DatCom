export const YouTubeVideo = ({ videoId }) => {

    const getVideoId = url => {
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
        <div style={{ position: "relative", width: "100%",height: "100%", paddingBottom: "56.25%" }}>
            <iframe
                src={`https://www.youtube.com/embed/${getVideoId(videoId)}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            ></iframe>
        </div>
    );
};
