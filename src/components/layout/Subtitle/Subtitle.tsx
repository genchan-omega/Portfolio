// /src/components/Subtitile/Subtitle.tsx

import {Lobster} from 'next/font/google';

const lobster = Lobster({weight: '400', subsets:['latin']});

interface Props {
  name: string;
}

export default function Subtitile(props: Props) {
  return (
    <h1 className={`${lobster.className} pt-14 pb-14 font-bold text-7xl text-center`}>
      {props.name}
    </h1>
  );
}
