// /src/components/Timelinecard/Timelinecard.tsx

import Image from "next/image";
import Fadein from "@/components/Fadein/Fadein";
// import Link from "next/link";

interface Props {
	src: string;
	title: string;
	date: string;
	description: string;
}

export default function Timelinecard(props: Props) {
	return (
    <Fadein>
      <figure className="w-full md:w-128 border-2 pb-5">
        <div className="relative h-32">
          <Image
            src={props.src}
            alt={props.title}
            className=""
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <figcaption>
          <p className="text-right pr-4">{props.date}</p>
          <h2 className="text-3xl font-bold text-center">{props.title}</h2>
          <p className="pt-3">
            {props.description}
          </p>
        </figcaption>
      </figure>
    </Fadein>
	);
}
