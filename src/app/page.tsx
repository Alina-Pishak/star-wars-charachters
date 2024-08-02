import Link from "next/link";

export default function Home() {
  return (
    <section className="container pt-28 ">
      <h1 className="text-3xl uppercase font-bold mb-8">
        Welocome to our app with Star Wars Character List
      </h1>
      <Link
        href="/characters"
        className="text-base uppercase border bg p-2 rounded-lg"
      >
        see characters
      </Link>
    </section>
  );
}
