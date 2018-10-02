export default ({ shareText = '', url = '', hashtags = '' }) => {
  const via = '&via=iamtekeste';
  const twitterURL = 'https://twitter.com/intent/tweet?';
  const finalLink = `${twitterURL}&url=${url}&text=${shareText}${via + hashtags}`;
  return (
    <div className="share">
      <a target="_blank" className="twitter-share-button" href={finalLink}>
        Tweet this
      </a>
    </div>
  );
};
