import json

while True:
    title = input("Post Title: ")
    date = input("Date: ")
    time = input("Time: ")
    content = []
    num_lines = int(input("Number of lines: "))
    for line in range(num_lines):
        text = input(f"Line {line+1}: ")
        content.append({"text": text})
        
    post = {
        "title": title,
        "date": date,
        "time": time,
        "content": content
        }
    
    with open("posts.json", 'r') as f:
        data = json.load(f)
    
    data['posts'].append(post)
    
    with open("posts.json", 'w') as f:
        json.dump(data, f, indent=4)