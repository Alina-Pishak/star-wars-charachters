import Link from "next/link";

export default function Home() {
  return (
    <section className="container pt-28 pb-[310px] md:pb-[380px] xl:pb-[500px]">
      <h1 className="text-3xl uppercase font-bold mb-8 md:w-[480px] xl:mx-auto">
        Welocome to our app with Star Wars Character List
      </h1>
      <Link
        href="/characters"
        className="text-base text-center uppercase border bg p-2 rounded-lg md:text-xl xl:w-52 xl:mx-auto xl:block"
      >
        see characters
      </Link>
    </section>
  );
}
