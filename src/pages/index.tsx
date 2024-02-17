/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Balancer from "react-wrap-balancer";
import Header from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#E4E2DD]">
        <img
          src="https://placehold.co/1280x720/?text=Image"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <section className="container flex flex-col items-center justify-center gap-12 py-60 ">
          <h1 className="text-xl font-light uppercase tracking-widest">
            Editorial Wedding Photographer
          </h1>
          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            <img
              src="https://placehold.co/800x1200/?text=Image"
              alt="sample"
              className="h-[80%] rounded-xl"
            />
            <img
              src="https://placehold.co/800x1200/?text=Image"
              alt="sample"
              className="rounded-xl"
            />
            <img
              src="https://placehold.co/800x1200/?text=Image"
              alt="sample"
              className="h-[80%] rounded-xl"
            />
          </div>
          <span className="max-w-[700px] text-center text-5xl font-light uppercase leading-tight">
            <Balancer>
              Exquisite Photography <i>For</i> Modern Couples
            </Balancer>
          </span>
        </section>
      </main>
    </>
  );
}
