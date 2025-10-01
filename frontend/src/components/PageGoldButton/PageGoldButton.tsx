import GoldButton from '../GoldButton/GoldButton';

export default function PageGoldButton(props: { link: string; text: string }) {
  return <GoldButton {...props} additionalClasses="inline-block mt-4" />;
}
