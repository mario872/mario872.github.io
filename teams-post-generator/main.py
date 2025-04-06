"Run loader.py first to generate posts.json, then run main.py to generate them."

from jinja2 import Environment, FileSystemLoader, select_autoescape
import json

env = Environment(
    loader=FileSystemLoader(searchpath="./"),
    autoescape=select_autoescape()
)

template = env.get_template("input.jinja")

with open('posts.json', 'r') as f:
    posts = json.load(f)["posts"]

i = 0
for post in posts:
    for line in range(len(post["content"])):
        if "https://leetcode.com" in post["content"][line]["text"]:
            post["content"][line]["link"] = True
        else:
            post["content"][line]["link"] = False

    with open(f"output/post_{str(i)}.html", 'w') as f:
        f.write(template.render(post=post))
        
    i += 1