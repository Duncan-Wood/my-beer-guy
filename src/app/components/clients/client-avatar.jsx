import Image from "next/image";

const ClientAvatar = ({clientLogo}) => {
  console.log(clientLogo);

  if (!clientLogo) {
    return null;
  }

  return (
    <Image
      src={clientLogo}
      width={150}
      height={150}
      alt="Picture of the author"
      loading="lazy"
    />
  );
};

export default ClientAvatar;
