// /src/components/Skill/Skill.tsx

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Skill(props: Props) {
  return (
    <Image
      src={props.src}
      width={150}
      height={150}
      alt={props.alt}
      className="p-2"
    />
  );
}
