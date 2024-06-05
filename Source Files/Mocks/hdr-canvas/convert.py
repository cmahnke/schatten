import sys

from coloraide import Color

defaultColor = 'red'
if (len(sys.argv) > 1):
    color = sys.argv[1]
else:
    color = defaultColor

print(f"{color.title()} SRGB coordinates: {Color(color).coords()}")

print(f"{color.title()} SRGB coordinates in ints: {list(map(lambda band: int(band * 255), Color(color).coords()))}")

print(f"{color.title()} REC2100-HLGG coordinates in ints: {list(map(lambda band: int(band * (2**16 - 1)), Color(color).convert('rec2100-hlg').coords()))}")
