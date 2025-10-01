export default function GoldButton({
  link,
  text,
  additionalClasses,
}: {
  link: string;
  text: string;
  additionalClasses?: string;
}) {
  return (
    <a href={link} className={`gold-button ${additionalClasses}`} target="_blank">
      {text}
    </a>
  );
}
