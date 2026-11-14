#!/usr/bin/env python3
"""Collide two words: shared letters, unique letters, anagram check."""

import sys
from collections import Counter


def collide(a: str, b: str, verbose: bool = False) -> None:
    left = a.lower()
    right = b.lower()
    set_a = set(c for c in left if c.isalpha())
    set_b = set(c for c in right if c.isalpha())

    shared = sorted(set_a & set_b)
    only_a = sorted(set_a - set_b)
    only_b = sorted(set_b - set_a)
    anagram = Counter(c for c in left if c.isalpha()) == Counter(
        c for c in right if c.isalpha()
    )

    print(f"shared: {''.join(shared) if shared else '(none)'}")
    print(f"unique to {a!r}: {''.join(only_a) if only_a else '(none)'}")
    print(f"unique to {b!r}: {''.join(only_b) if only_b else '(none)'}")
    print(f"anagram: {'yes' if anagram else 'no'}")

    if verbose:
        shared_set = set_a & set_b
        print("breakdown:")
        for word, lowered in ((a, left), (b, right)):
            print(f"  {word}:")
            for ch in lowered:
                if not ch.isalpha():
                    print(f"    {ch!r}: (ignored)")
                    continue
                if ch in shared_set:
                    tag = "shared"
                else:
                    tag = f"unique to {word!r}"
                print(f"    {ch}: {tag}")


def parse_args(argv: list[str]) -> tuple[str, str, bool]:
    verbose = False
    words: list[str] = []
    for arg in argv[1:]:
        if arg == "--verbose":
            verbose = True
        elif arg.startswith("-"):
            print(f"usage: {argv[0]} WORD1 WORD2 [--verbose]", file=sys.stderr)
            sys.exit(1)
        else:
            words.append(arg)
    if len(words) != 2:
        print(f"usage: {argv[0]} WORD1 WORD2 [--verbose]", file=sys.stderr)
        sys.exit(1)
    return words[0], words[1], verbose


def main() -> None:
    a, b, verbose = parse_args(sys.argv)
    collide(a, b, verbose=verbose)


if __name__ == "__main__":
    main()
