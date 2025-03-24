// /src/components/Header/Header.tsx

// import useState from 'next';

export default function Header() {
  return (
    <header className="text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center">
      {/* 左側：サイトタイトル */}
      <h1 className="text-xl font-bold">Welcome to My Website</h1>

      {/* 右側：ハンバーガーメニュー */}
      <button className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition md:hidden fixed top-4 right-4">
        {/* ハンバーガーアイコン */}
        <span className="block h-1 w-1 absolute bg-amber-300"></span>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
    </header>
  );
}
