from PIL import Image

img = Image.open('src/assets/logo/rustic-retreat-logo-light.png')
img = img.convert('RGBA')
pixels = img.load()

# Print corners and center
print("Top-left:", pixels[0, 0])
print("Top-right:", pixels[img.width-1, 0])
print("Bottom-left:", pixels[0, img.height-1])
print("Bottom-right:", pixels[img.width-1, img.height-1])
print("Center:", pixels[img.width//2, img.height//2])

# Find min and max colors
min_c = (255, 255, 255)
max_c = (0, 0, 0)
for y in range(img.height):
    for x in range(img.width):
        c = pixels[x, y]
        if sum(c[:3]) < sum(min_c[:3]):
            min_c = c
        if sum(c[:3]) > sum(max_c[:3]):
            max_c = c
print("Min color:", min_c)
print("Max color:", max_c)
