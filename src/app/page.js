import Link from "next/link";
export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen text-white text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546069901-eacef0df6022')",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-2xl p-10 bg-white bg-opacity-20 rounded-lg">
        <h1 className="text-6xl mb-5 font-pacifico">
          Welcome To Recipes By Chirag
        </h1>
        <Link
          href={"/recipe"}
          className="inline-block px-8 py-4 text-lg text-white bg-orange-500 rounded-lg transition-colors duration-300 hover:bg-orange-400"
        >
          Click To See Recipes
        </Link>
      </div>
    </div>
  );
}
