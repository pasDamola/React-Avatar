export const FALLBACK_AVATAR_ALT_TEXT = "@hello-cat";
export const FALLBACK_AVATAR_URL =
  '"https://cataas.com/cat/says/hello%20world!";';

type AvatarProps = {
  /** the url of an image to render for the Avatar. **/
  url?: string;
  /** the alt text to use for the url image. **/
  alt?: string;
};

function Avatar({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) {
  return <img src={url} alt={alt} />;
}

export default Avatar;
