import json, sys, os, urllib.request, concurrent.futures as cf, datetime
root = sys.argv[1]
d = json.load(open(os.path.join(root, 'research/ig.json')))
out = os.path.join(root, 'originals/ig'); os.makedirs(out, exist_ok=True)
jobs = []
cut = datetime.datetime(2019, 10, 1).timestamp()
for p in d['posts']:
    if p['code'] == 'Dee6YV2g5gt': continue  # ad
    if p['t'] < cut and p['type'] != 8: continue
    urls = p['car'] if p['car'] else [p['img']]
    for i, u in enumerate(urls):
        if u: jobs.append((u, f"{p['code']}_{i}.jpg"))
jobs.append((d['user']['pic'], 'profile.jpg'))
for h in json.load(open(os.path.join(root, 'research/hl.json'))):
    jobs.append((h['img'], f"hl_{h['pk']}.jpg"))
def get(j):
    u, n = j; fp = os.path.join(out, n)
    if os.path.exists(fp): return 0
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        b = urllib.request.urlopen(req, timeout=30).read(); open(fp, 'wb').write(b); return 1
    except Exception as e:
        print('fail', n, e); return 0
with cf.ThreadPoolExecutor(8) as ex: print(sum(ex.map(get, jobs)), 'of', len(jobs))
