const apiSetting = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4edf5c1c53fbb0178005cff3258042ce',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiSetting;