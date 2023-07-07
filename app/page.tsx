import {
  ArrowIcon,
} from 'components/icons';

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-4xl font-serif">Gaurav Chandak</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        Hi, I am a software engineer and entrepreneur. I am currently working at Quizizz as a software engineer.
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        I previously co-founded an EdTech + HRTech startup called workat.tech. Prior to that I worked at Microsoft, Flipkart and Tracxn.
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        I love to build products that solve user problems. I'm currently learning about building AI-enabled products.
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all mb-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/gc_nit"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/gcnit"
          >
            <ArrowIcon />
            <p className="h-7">connect with me on linkedin</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
