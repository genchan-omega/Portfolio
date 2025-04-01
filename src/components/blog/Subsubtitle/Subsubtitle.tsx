// /src/components/Subtitile/Subtitle.tsx

import {Lobster} from 'next/font/google';

const lobster = Lobster({weight: '400', subsets:['latin']});

interface Props {
  name: string;
}

export default function Subsubtitle(props: Props) {
  return (
    <h1 className={`${lobster.className} pb-14 font-bold text-5xl text-center`}>
      {props.name}
    </h1>
  );
}
