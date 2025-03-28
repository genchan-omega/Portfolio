// /src/components/Subtitile/Subtitle.tsx

import {Lobster} from 'next/font/google';

const lobster = Lobster({weight: '400', subsets:['latin']});

interface Props {
  name: string;
}

export default function Subtitile(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className={`${lobster.className} pt-14 pb-14 font-bold text-7xl`}>
        {props.name}
      </h1>
    </div>
  );
}
