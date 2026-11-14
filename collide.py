#!/usr/bin/env python3
"""Collide two words: shared letters, unique letters, anagram check."""

import sys
from collections import Counter


def collide(a: str, b: str) -> None:
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


def main() -> None:
    if len(sys.argv) != 3:
        print(f"usage: {sys.argv[0]} WORD1 WORD2", file=sys.stderr)
        sys.exit(1)
    collide(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()
