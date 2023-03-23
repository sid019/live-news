export default function sortNewsByImage(news : NewsResponce) {
    if (!news || !news.data) {
        return null;
      }
    const newsWithImage = news.data.filter(item => item.image !== null );
    const newsWithOutImage = news.data.filter(item => item.image === null );

    const sortedNewsResponce = {
        pagination: news.pagination,
        data: [ ...newsWithImage, ...newsWithOutImage ]
    }
    return sortedNewsResponce;
}