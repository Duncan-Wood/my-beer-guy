import Image from "next/image";

const ClientAvatar = ({clientLogo}) => {

  if (!clientLogo) {
    return null;
  }

  return (
    // <Image
    //   src={client.pathname}
    //   width={150}
    //   height={150}
    //   alt={client.alt}
    //   loading="lazy"
    // />
    <Image
    src={clientLogo}
    width={150}
    height={150}
    alt="Client Logo"
    loading="lazy"
  />
  );
};

export default ClientAvatar;
