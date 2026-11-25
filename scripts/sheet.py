import sys, os, glob
from PIL import Image, ImageDraw
src, outp, pat = sys.argv[1], sys.argv[2], sys.argv[3]
files = sorted(glob.glob(os.path.join(src, pat)))
cols, tw = 8, 220
rows = (len(files) + cols - 1) // cols
sheet = Image.new('RGB', (cols * tw, rows * (tw + 16)), 'white')
d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    im = Image.open(f).convert('RGB'); im.thumbnail((tw, tw))
    x, y = (i % cols) * tw, (i // cols) * (tw + 16)
    sheet.paste(im, (x, y)); d.text((x + 2, y + tw + 2), os.path.basename(f)[:30], fill='black')
sheet.save(outp, quality=80); print(len(files), outp)
