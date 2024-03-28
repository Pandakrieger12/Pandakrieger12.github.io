# Öffnen der Zählerdatei und Erhöhen des Zählers um 1
with open("counter.txt", "r+") as file:
    count = int(file.read()) + 1
    file.seek(0)
    file.write(str(count))

# Rückgabe des Zählerstandes
print(count)
