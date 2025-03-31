// /src/timeline/page.tsx

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Subtitle from "@/components/Subtitle/Subtitle";
import Timelinecard from "@/components/Timelinecard/Timelinecard";

export default function Timeline() {
	return (
			<div className="flex flex-col w-full mx-auto">
				<Header />
				<Subtitle name="Timeline" />
				<div className="flex flex-col justify-center items-center gap-20 w-full">
            <Timelinecard
              src="/timeline/univ.png"
              title="大学院入学"
              date="2025/4"
              description="東京農工大学院知能情報システム工学専攻に入学しました．"
            />
            <Timelinecard
              src="/timeline/graduate.jpeg"
              title="大学卒業"
              date="2025/3"
              description="東京農工大学知能情報システム工学科を卒業しました．1年の頃から掲げていた早期卒業の目標を達成できて良かったです．"
            />
            <Timelinecard
              src="/timeline/ipa.png"
              title="応用情報技術者資格取得"
              date="2024/7"
              description="応用情報技術者資格を取得しました．本気の勉強をしてぎりぎり合格だったので，かなり危ない橋を渡ったと思います．とはいえ，一発合格をもぎとれたのはでかい．"
            />
            <Timelinecard
              src="/timeline/ipa.png"
              title="基本情報技術者資格取得"
              date="2023/11"
              description="基本情報技術者資格を取得しました．情報全般に渡って体系だった学習をしたのは初めてだったので，新鮮な気持ちで取り組めました．テクノロジ系以外の勉強が辛かった...．"
            />
            <Timelinecard
              src="/timeline/univ.png"
              title="大学入学"
              date="2021/4"
              description="東京農工大学知能情報システム工学科に入学しました．"
            />
            <Timelinecard
              src="/others/botchi.jpg"
              title="英検三級取得"
              date="2018/7"
              description="実用英語技能検定の三級を取得しました．ところで，英検ってロゴを自由に掲載してはいけないんですね．"
            />
            <Timelinecard
              src="/timeline/kanken.png"
              title="漢検準二級取得"
              date="2017/8"
              description="日本漢字能力検定準二級を取得しました．"
            />
            <Timelinecard
              src="/timeline/birth.jpg"
              title="誕生"
              date="2003/10"
              description="僕が生まれました．(友人の真似をして置いてみましたが，この報告いるか？)"
            />
        </div>
        <div className="pb-5" />
			<Footer />
		</div>
	);
}
