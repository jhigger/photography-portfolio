import Head from "next/head";
import { useToggle } from "usehooks-ts";
import Form from "~/components/Form";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";
import Section3 from "~/components/Section3";
import Section4 from "~/components/Section4";
import Section5 from "~/components/Section5";
import Section6 from "~/components/Section6";
import Section7 from "~/components/Section7";
import Section8 from "~/components/Section8";
import { cn } from "~/utils/cn";

export default function Home() {
  const [open, toggle] = useToggle(false);

  return (
    <>
      <Head>
        <title>Editorial Wedding Photographer</title>
        <meta
          name="description"
          content="Destination Editorial Wedding Photographer based in the UK & Italy. Capturing wedding celebrations in editorial style for stylish couples in Europe and beyond."
        />
        <link
          rel="icon"
          href="https://static.showit.co/200/MKXNqRRqQ7G3SGhRZC9-OQ/164641/renaistudio-edirorial-wedding-photographer.png"
        />
      </Head>
      <main
        className={cn(
          "relative h-screen overflow-x-hidden [perspective:100px]",
          open ? "overflow-y-hidden" : "overflow-y-auto",
        )}
      >
        <Header open={open} toggle={toggle} />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Form />
      </main>
    </>
  );
}
