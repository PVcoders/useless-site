function generateVid() {
    let websites = [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // yes
        "https://www.youtube.com/watch?v=KWUgz7hwPyY", // Consider the following
        "https://www.youtube.com/watch?v=pZLZHX7skZ0", // fnaf lore (EPILEPSY)
        "https://www.youtube.com/watch?v=QX43QTYyV-8", // fish
        "https://www.youtube.com/watch?v=wT0o7P6yXiM", // meme
        "https://www.youtube.com/watch?v=D9E0GYOl38U", // meme 2
        "https://www.youtube.com/watch?v=WM7WxhL0kSc", // fire beat
        "https://www.youtube.com/shorts/fWlYGVXB3PE", // leaked scarlet and violet gameplay
        "https://www.youtube.com/watch?v=plw2hFHnztw", // the eeper
        "https://www.youtube.com/watch?v=14Se6xJTBpQ", // MAN
        "https://www.youtube.com/watch?v=sqyHAbUaaSQ", //think about it! (EPILEPSY)
        "https://www.youtube.com/watch?v=3-PMv_vzWwM", //revenge
        "https://www.youtube.com/watch?v=K3_5leIaaVo", //Oh the misery
    ];

    num = Math.floor(Math.random() * websites.length);
    window.location.replace(websites[num])
    console.log(websites.length) // KEEP
}