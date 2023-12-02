import { VercelIcon, GithubIcon, DabbleLabLogo } from "../icons";
import Link from 'next/link'
import Image from 'next/image'

const LinkBar = () => (
  <div className="mx-auto mt-10 max-w-7xl lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="https://dabblelab.com" className="-m-1.5 p-1.5">
            <span className="sr-only">Dabble Lab</span>
            <DabbleLabLogo className="h-12 w-auto  fill-black hover:fill-zinc-800 dark:fill-white dark:hover:fill-zinc-200" aria-hidden="true" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://dabblelab.com/connect" className="text-lg font-bold leading-6 text-zinc-950 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-200">
            Work with us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </div>
  </div>

);

export default LinkBar;
