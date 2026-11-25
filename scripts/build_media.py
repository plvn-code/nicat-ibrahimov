"""Builds public/photos (+ public/video) from originals/ (Instagram posts, reels).

Run:  ~/Desktop/website/aliot/research/.venv/bin/python scripts/build_media.py
(the aliot venv has Pillow + imageio-ffmpeg; no separate install needed)
"""

import os
import subprocess
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IG = os.path.join(ROOT, "originals", "ig")
VID = os.path.join(ROOT, "originals", "video")
OUT = os.path.join(ROOT, "public", "photos")
OUTV = os.path.join(ROOT, "public", "video")
TMP = os.path.join(ROOT, "research", "frames-full")
os.makedirs(OUT, exist_ok=True)
os.makedirs(OUTV, exist_ok=True)
os.makedirs(TMP, exist_ok=True)

try:
    import imageio_ffmpeg

    FF = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:  # pragma: no cover
    FF = open(os.path.join(ROOT, "research", "ffmpeg_path")).read().strip()

MAX = 1600


def save(im: Image.Image, name: str, max_side: int = MAX, q: int = 84):
    im = im.convert("RGB")
    im.thumbnail((max_side, max_side), Image.LANCZOS)
    im.save(os.path.join(OUT, name + ".jpg"), quality=q, optimize=True, progressive=True)


def crop_rel(im: Image.Image, box):
    """box = (left, top, right, bottom) as 0..1 fractions."""
    w, h = im.size
    return im.crop((int(box[0] * w), int(box[1] * h), int(box[2] * w), int(box[3] * h)))


def post(code: str, name: str, box=None, max_side: int = MAX):
    im = ImageOps.exif_transpose(Image.open(os.path.join(IG, code + ".jpg")))
    if box:
        im = crop_rel(im, box)
    save(im, name, max_side)


def frame(video: str, t: float, name: str, box=None):
    fp = os.path.join(TMP, f"{video}_{t}.png")
    if not os.path.exists(fp):
        subprocess.run([FF, "-loglevel", "error", "-y", "-ss", str(t), "-i", os.path.join(VID, video + ".mp4"), "-frames:v", "1", fp], check=True)
    im = Image.open(fp)
    if box:
        im = crop_rel(im, box)
    save(im, name)


def split(code: str, name: str, seam: float = 0.5, gap: float = 0.012):
    """Instagram before/after collage: top half = before, bottom half = after. Both halves get the same size."""
    im = ImageOps.exif_transpose(Image.open(os.path.join(IG, code + ".jpg"))).convert("RGB")
    w, h = im.size
    hh = int(h * (seam - gap))
    top = im.crop((0, 0, w, hh))
    bottom = im.crop((0, int(h * (seam + gap)), w, int(h * (seam + gap)) + hh))
    save(top, name + "-before", 1400)
    save(bottom, name + "-after", 1400)


def clip(video: str, start: float, dur: float, name: str):
    out = os.path.join(OUTV, name + ".mp4")
    subprocess.run(
        [FF, "-loglevel", "error", "-y", "-ss", str(start), "-t", str(dur), "-i", os.path.join(VID, video + ".mp4"),
         "-an", "-vf", "scale=720:-2", "-c:v", "libx264", "-crf", "27", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out],
        check=True,
    )


# ---------- Doctor (frames from reels, clean — no captions) ----------
frame("Dd6sOteoDYF", 3, "doc-standing")
frame("DdJ_ickoOYH", 1, "doc-shield")
frame("DdJ_ickoOYH", 13, "work-light")
frame("DdJ_ickoOYH", 25, "work-close")
frame("DdJ_ickoOYH", 3, "work-patient")
frame("DdZIgixMViB", 23, "doc-check")
frame("DdZIgixMViB", 25, "doc-portrait")
frame("DdZIgixMViB", 43, "doc-explain")
frame("DfSJt2IIi2_", 15, "surgery")
frame("DfSJt2IIi2_", 39, "surgery-2")
frame("DfSJt2IIi2_", 5, "instruments")
frame("DfSJt2IIi2_", 67, "xray-monitor")
frame("Df4OHzLod_7", 3, "doc-turquoise")
frame("DfXEQo-oeYD", 3, "doc-turquoise-2", (0, 0, 1, 0.72))
frame("DfAKpApIOkk", 11, "doc-desk")
frame("DeKA7Seofiq", 1, "clinic-window")
frame("DeKA7Seofiq", 7, "clinic-patient")
frame("DLH9NOYI6ZI", 17, "conf-marrakech", (0, 0, 0.9, 1))
frame("DLH9NOYI6ZI", 31, "conf-marrakech-2", (0, 0, 0.9, 1))
frame("DLH9NOYI6ZI", 3, "conf-marrakech-hall", (0, 0, 0.9, 1))

# ---------- Lab work / results ----------
post("DbIaweYF9c-_0", "lab-veneers")
post("DbIaweYF9c-_1", "lab-veneers-2")
post("DbIaweYF9c-_2", "lab-zirconia-model")
post("DbIaweYF9c-_3", "lab-zirconia")
post("DbIaweYF9c-_4", "lab-crown")
post("DfPpOSFCFND_3", "smile-zirconia")
post("DfPpOSFCFND_4", "smile-zirconia-2")
post("DfPpOSFCFND_5", "smile-zirconia-3")
post("DfPpOSFCFND_2", "smile-zirconia-before")
post("DgIvgK3iHiL_3", "smile-veneers")
post("DgIvgK3iHiL_4", "smile-veneers-2")
post("DfoXsphCDP9_8", "smile-implants")
post("DfoXsphCDP9_9", "smile-implants-2")
post("DfoXsphCDP9_6", "xray-plan")
post("DfoXsphCDP9_7", "xray-result")
post("DYo4N2TiB11_0", "xray-allon6")
post("DYo4N2TiB11_1", "xray-allon6-2")
post("DA3NGtrg95i_0", "dsd-smile")
post("DA3NGtrg95i_2", "dsd-after")
post("DA3NGtrg95i_1", "dsd-before")
post("DfPqLtNCBp4_4", "smile-diastema")
post("C4dPK3Ft9eq_0", "filling-front")

# ---------- Conferences ----------
post("CyojzJ0tohk_0", "conf-italy")
post("Cfs_PyjA5s2_0", "conf-antalya")
post("CaKehorAAqa_0", "conf-ganja")
post("CTezjW9jXSL_2", "conf-egypt")
post("Ctq59KKNPgs_0", "conf-charity")
post("DSfuWmXCMdK_0", "conf-caspident")
post("Bxr3toiFhmf_0", "conf-israel")
post("BoTuMurBV6L_0", "conf-iti")
post("B3wnQimFXVA_0", "conf-caspian")
post("BrfyS_7Fg2H_0", "conf-megagen")

# ---------- Before / after (Instagram collages) ----------
split("DfPqzsbiHhY_0", "case-front-implants")
split("DgIvgK3iHiL_0", "case-veneers")
split("DfPpOSFCFND_0", "case-zirconia")
split("DehUYQzIeyr_0", "case-single-implant")
split("DdRtG-yiMdJ_1", "case-rehab")
split("DfPqLtNCBp4_0", "case-diastema")
split("DgIvtcHiOoC_0", "case-allon6")
split("DdoxeEgiPFf_0", "case-overdenture")
split("DezJ0LWIdn3_0", "case-implant-bridge")
split("DfoXsphCDP9_0", "case-8-implants")
split("DAGJSdXgMuK_0", "case-metal-ceramic")

# ---------- Video ----------
if "--video" in sys.argv:
    clip("DfSJt2IIi2_", 13, 9, "surgery")
    clip("DdJ_ickoOYH", 0, 8, "work")

print("photos:", len(os.listdir(OUT)))
