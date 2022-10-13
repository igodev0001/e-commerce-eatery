interface Props {
  location: string;
}

// test it, if does not work, set an initial value for Location prop
export default function Map({ location }: Props) {
  const myKey = process.env.NEXT_PUBLIC_MAP_KEY;

  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${myKey}
&q=${location}`}
      width="100%"
      height="600"
      style={{ border: 0 }}
      loading="lazy"
      title="map"
    ></iframe>
  );
}
