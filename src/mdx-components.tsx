import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="mt-10 text-3xl font-semibold tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-8 text-2xl font-semibold tracking-tight">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-6 text-xl font-semibold">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="mt-4 leading-7 text-muted-foreground">{children}</p>
        ),
        a: ({ href, children }) => (
            <Link
                href={href ?? "#"}
                className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
                {children}
            </Link>
        ),
        ul: ({ children }) => (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {children}
            </ul>
        ),
        code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                {children}
            </pre>
        ),
        ...components,
    };
}