#!/usr/bin/env python3
"""Resize and compress photo assets for faster mobile loading."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "assets"
MAX_WIDTH = 900
JPEG_QUALITY = 82

# Photos (no alpha) — convert PNG → optimized JPEG
PHOTO_PATHS = [
    "opening/1.png",
    "opening/2.png",
    "opening/3.png",
    "opening/4.png",
    "opening/5.png",
    "opening/6.png",
    "moments/1.png",
    "moments/2.png",
    "moments/3.png",
    "moments/4.png",
    "thanks/1.png",
    "thanks/2.png",
    "thanks/3.png",
    "volunteer/2.png",
    "volunteer/3.png",
    "whats-next/cutted.png",
    "ending/closing.png",
]


def optimize_photo(rel: str) -> None:
    src = ROOT / rel
    if not src.exists():
        print(f"skip missing: {rel}")
        return

    dst = src.with_suffix(".jpg")
    before = src.stat().st_size

    with Image.open(src) as img:
        img = img.convert("RGB")
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            img = img.resize((MAX_WIDTH, round(img.height * ratio)), Image.Resampling.LANCZOS)
        img.save(dst, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)

    after = dst.stat().st_size
    src.unlink()
    print(f"{rel} -> {dst.name}  {before // 1024}KB -> {after // 1024}KB")


def main() -> None:
    for rel in PHOTO_PATHS:
        optimize_photo(rel)


if __name__ == "__main__":
    main()
